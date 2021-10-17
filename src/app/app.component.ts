import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'minca-scooter-app';
  sendBoolean: boolean = true;

  sendBooleanNav(bool: boolean){
    this.sendBoolean = bool;
    console.log(this.sendBoolean);
  }
}
