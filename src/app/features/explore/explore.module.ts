import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExplorePageComponent } from './pages/explore-page/explore-page.component';
import {MatSelectModule} from "@angular/material/select";
import {MatSliderModule} from "@angular/material/slider";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatInput} from "@angular/material/input";


@NgModule({
  declarations: [ExplorePageComponent],
  imports: [
    CommonModule,
    ExploreRoutingModule,
    MatSelectModule,
    MatSliderModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatInput,
  ],
})
export class ExploreModule {}
