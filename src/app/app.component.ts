import { Component } from '@angular/core';
import {CustomerButton} from './interfaces/buttons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'minca-scooter-app';
  sendBoolean: boolean = true;
  customerButtons: string[] = []
  
  sendBooleanNav(bool: boolean){
    this.sendBoolean = bool;
    console.log(this.sendBoolean);
  }

  sendInfoButtons(datos: string[]){
    this.customerButtons = datos;
    console.log(datos)
  }
}
