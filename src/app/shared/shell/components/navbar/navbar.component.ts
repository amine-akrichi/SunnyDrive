import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { HomeScrollService } from '../../../../features/home/services/home-scroll.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @ViewChild('navbar') navbar!: ElementRef;
  navbarStyles: any = {
    boxShadow: 'none',
  };

  constructor(
    protected router: Router,
    private homeScrollService: HomeScrollService,
  ) {}

  @HostListener('window:scroll', ['$event'])
  scroll() {
    window.pageYOffset >= 1
      ? (this.navbarStyles = { boxShadow: 'var(--soft-box-shadow)' })
      : (this.navbarStyles = { boxShadow: 'none' });
  }

  onScroll(element: String) {
    if (this.router.url !== '/home') {
      this.router.navigate(['/home']);
    }
    setTimeout(() => {
      switch (element) {
        case 'home':
          this.homeScrollService.triggerScrollToHomeSubject();
          break;
        case 'featured':
          this.homeScrollService.triggerScrollToFeaturedSubject();
          break;
        default:
          console.error('Element not found');
      }
    }, 100);
  }
}
