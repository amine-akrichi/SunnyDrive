import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRoutingModule } from './request-routing.module';
import { RequestPageComponent } from './pages/request-page/request-page.component';
import {
  MatDatepicker,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInput } from '@angular/material/input';
import {MatRadioModule} from "@angular/material/radio";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [RequestPageComponent],
  imports: [
    CommonModule,
    RequestRoutingModule,
    MatDatepicker,
    MatSelectModule,
    MatSliderModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatInput,
    MatRadioModule,
    MatIconModule
  ],
})
export class RequestModule {}
