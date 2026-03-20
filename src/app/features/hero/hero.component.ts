import {
  Component, OnInit, OnDestroy,
  AfterViewInit, ElementRef, ViewChild,
} from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { FloatingBadge } from '../../core/models/experience.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('matrixCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  readonly stats           = this.data.stats;
  readonly floatingBadges: FloatingBadge[] = this.data.floatingBadges;

  typedText = '';
  displayedStats: { value: number; label: string }[] = [];

  private readonly phrases = [
    'Fullstack Developer',
    'Angular Specialist',
    'Node.js Engineer',
    'TypeScript Advocate',
  ];
  private phraseIndex = 0;
  private charIndex   = 0;
  private deleting    = false;
  private typingTimer?: ReturnType<typeof setTimeout>;
  private matrixTimer?: ReturnType<typeof setInterval>;
  private counterObserver?: IntersectionObserver;
  private drops: number[] = [];

  constructor(private data: PortfolioDataService) {}

  ngOnInit(): void {
    this.displayedStats = this.stats.map(s => ({ ...s, value: 0 }));
    this.runTyping();
  }

  ngAfterViewInit(): void {
    this.initMatrix();
    this.initCounters();
  }

  ngOnDestroy(): void {
    clearTimeout(this.typingTimer);
    clearInterval(this.matrixTimer);
    this.counterObserver?.disconnect();
  }

  scrollTo(fragment: string): void {
    document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
  }

  private runTyping(): void {
    const phrase = this.phrases[this.phraseIndex];
    if (!this.deleting) {
      this.typedText = phrase.slice(0, ++this.charIndex);
      if (this.charIndex === phrase.length) {
        this.deleting = true;
        this.typingTimer = setTimeout(() => this.runTyping(), 1800);
        return;
      }
    } else {
      this.typedText = phrase.slice(0, --this.charIndex);
      if (this.charIndex === 0) {
        this.deleting = false;
        this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      }
    }
    this.typingTimer = setTimeout(() => this.runTyping(), this.deleting ? 60 : 100);
  }

  private initMatrix(): void {
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) return;
    const ctx    = canvas.getContext('2d')!;
    const chars  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789{}[]<>/\\|';
    const fs     = 12;
    const colors = ['#00ff87', '#4f8ef7', '#a855f7'];

    const resize = (): void => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      this.drops    = Array(Math.floor(canvas.width / fs)).fill(1);
    };
    resize();
    window.addEventListener('resize', resize);

    this.matrixTimer = setInterval(() => {
      ctx.fillStyle = 'rgba(8,12,20,0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fs}px monospace`;
      this.drops.forEach((drop, i) => {
        ctx.fillStyle  = colors[i % 3];
        ctx.globalAlpha = 0.65;
        ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * fs, drop * fs);
        if (drop * fs > canvas.height && Math.random() > 0.975) this.drops[i] = 0;
        this.drops[i]++;
      });
    }, 55);
  }

  private initCounters(): void {
    const statsEl = document.querySelector('.stats-bar');
    if (!statsEl) return;
    this.counterObserver = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      this.stats.forEach((stat, i) => {
        const step = stat.value / 40;
        let current = 0;
        const timer = setInterval(() => {
          current = Math.min(current + step, stat.value);
          this.displayedStats[i].value = Math.floor(current);
          if (current >= stat.value) clearInterval(timer);
        }, 40);
      });
      this.counterObserver!.disconnect();
    }, { threshold: 0.3 });
    this.counterObserver.observe(statsEl);
  }
}