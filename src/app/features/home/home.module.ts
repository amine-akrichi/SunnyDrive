import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {HeroComponent} from './components/hero/hero.component';
import {FeaturedComponent} from './components/featured/featured.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import { LocationsComponent } from './components/locations/locations.component';


@NgModule({
  declarations: [
    HomePageComponent,
    HeroComponent,
    FeaturedComponent,
    LocationsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatDatepickerModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class HomeModule {
}
