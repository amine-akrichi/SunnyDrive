import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LayoutComponent } from './shell/layout/layout.component';
import {NavbarComponent} from "./shell/components/navbar/navbar.component";
import {FooterComponent} from "./shell/components/footer/footer.component";
import { ScrollToTopComponent } from './shell/components/scroll-to-top/scroll-to-top.component';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    ScrollToTopComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
