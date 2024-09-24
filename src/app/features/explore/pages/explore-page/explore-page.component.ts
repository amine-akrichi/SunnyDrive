import { Component } from '@angular/core';

@Component({
  selector: 'app-explore-pages',
  templateUrl: './explore-page.component.html',
  styleUrl: './explore-page.component.css',
})
export class ExplorePageComponent {
  constructor() {}

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
