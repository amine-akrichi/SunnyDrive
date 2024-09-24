import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.css'
})
export class ScrollToTopComponent {
  bottonStyles = {
    transform: 'translateX(100px)',
  }

  @HostListener('window:scroll', ['$event'])
  isVisible() {
    window.pageYOffset >= 300
      ? (this.bottonStyles = { transform: 'translateX(0)' })
      : (this.bottonStyles = { transform: 'translateX(100px)' });
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
