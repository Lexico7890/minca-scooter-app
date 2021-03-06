import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GenericModule } from './generic/generic.module';

import { AppComponent } from './app.component';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faUser,
  faBars,
  faCalendar,
  faUsers,
  faBicycle,
  faPlusSquare, 
  faList,
  faMap,
  faPowerOff,
  faBomb
} from '@fortawesome/free-solid-svg-icons';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GenericModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faUser,
      faBars,
      faCalendar,
      faUsers,
      faBicycle,
      faPlusSquare,
      faList,
      faMap,
      faPowerOff,
      faBomb
    );
  }
}
