import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { HomeScrollService } from '../../services/home-scroll.service';

@Component({
  selector: 'app-home-pages',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  @ViewChild('featuredSection', { static: false, read: ElementRef }) featuredSection!: ElementRef;

  constructor(private homeScrollService: HomeScrollService) {
    this.recieveScrollToSubject();
  }

  ngAfterViewInit() {
    this.recieveScrollToSubject();
  }

  recieveScrollToSubject() {
    this.homeScrollService.scrollToFeaturedSubject$.subscribe(() => {
      console.log('scrolling to featured section');
      this.onScroll('featured');
    });
    this.homeScrollService.scrollToHomeSubject$.subscribe(() => {
      console.log('scrolling to home section');
      this.onScroll('home');
    });

  }


  onScroll(section:String) {
    switch (section) {
      case 'featured':
        this.featuredSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'home':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      default:
        console.error('Element not found');
    }
  }
}
