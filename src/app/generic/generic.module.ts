import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import { GenericRoutingModule } from './generic-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { VerticalNavComponent } from './vertical-nav/vertical-nav.component';
import { OptionButtonComponent } from './option-button/option-button.component';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    NavbarComponent,
    VerticalNavComponent,
    OptionButtonComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    GenericRoutingModule,
    FontAwesomeModule
  ],
  exports : [
    NavbarComponent,
    VerticalNavComponent,
    OptionButtonComponent,
    TableComponent
  ]
})
export class GenericModule { }
