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
  faMap
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GenericModule],
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
      faMap
    );
  }
}
