import { Directive, ElementRef, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Directive({ selector: '[appScrollAnimation]' })
export class ScrollAnimationDirective implements OnInit, OnDestroy {
  private observer!: IntersectionObserver;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'fade-in');
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'visible');
          this.observer.unobserve(this.el.nativeElement);
        }
      },
      { threshold: 0.1 }
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}