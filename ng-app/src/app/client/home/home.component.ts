import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  navbarStyles = {
    backgroundColor: 'white',
    transition: '0.3s',
    boxShadow: 'none',
  };


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPos = window.pageYOffset;
    if (
      currentScrollPos >= 1
    ) {
      this.navbarStyles.boxShadow = 'rgba(149, 157, 165, 0.2) 0px 8px 24px';
    } else {
      
      this.navbarStyles.boxShadow = 'none';
    }
  }
}
