import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import { GenericRoutingModule } from './generic-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { VerticalNavComponent } from './vertical-nav/vertical-nav.component';


@NgModule({
  declarations: [
    NavbarComponent,
    VerticalNavComponent
  ],
  imports: [
    CommonModule,
    GenericRoutingModule,
    FontAwesomeModule
  ],
  exports : [
    NavbarComponent,
    VerticalNavComponent
  ]
})
export class GenericModule { }
