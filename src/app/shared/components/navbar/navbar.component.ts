import { Component, HostListener, signal } from '@angular/core';

interface NavLink { index: string; label: string; fragment: string; }

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  readonly navLinks: NavLink[] = [
    { index: '01', label: 'about',      fragment: 'about'      },
    { index: '02', label: 'stack',      fragment: 'stack'      },
    { index: '03', label: 'projects',   fragment: 'projects'   },
    { index: '04', label: 'experience', fragment: 'experience' },
    { index: '05', label: 'contact',    fragment: 'contact'    },
  ];

  scrolled = signal(false);

  @HostListener('window:scroll')
  onScroll(): void { this.scrolled.set(window.scrollY > 20); }

  scrollTo(fragment: string): void {
    document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
  }
}