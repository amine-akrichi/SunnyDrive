import { Component } from '@angular/core';

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrl: './home-hero.component.css',
})
export class HomeHeroComponent {
  locations = [
    'Carthage Airport',
    'Enfidha Airport',
    'Tunis',
    'Djerba',
    'Hammamet',
    'Sousse',
  ];
}
