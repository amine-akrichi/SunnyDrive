import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.css'
})
export class FeaturedComponent {
  @ViewChild('cardswrapper') cardWrapper!: ElementRef;

  scrollRight() {
    this.cardWrapper.nativeElement.scrollBy(
      {
        left: - this.cardWrapper.nativeElement.offsetWidth -10,
        behavior: 'smooth'
      }
    )
  }

  scrollLeft() {
    this.cardWrapper.nativeElement.scrollBy(
      {
        left: this.cardWrapper.nativeElement.offsetWidth +10,
        behavior: 'smooth'
      }
    )
  }
}
