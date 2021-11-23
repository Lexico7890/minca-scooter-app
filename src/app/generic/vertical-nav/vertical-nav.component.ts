import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {CustomerButton} from "../../interfaces/buttons";


@Component({
  selector: 'app-vertical-nav',
  templateUrl: './vertical-nav.component.html',
  styleUrls: ['./vertical-nav.component.css']
})
export class VerticalNavComponent implements OnInit {

  activeBool: boolean[] = [false,false,false,false,false,false];
  position: number = 0;
  imagesButtons: string[][] = [
    ['','',''],
    ['add_user','list_users','details_user'],
    ['add_scooter','list_scooter','details_scooter']
  ]

  @Input() sendBooleanNav: boolean = false;
  @Output() sendInfoImage = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.enviarInfo(0, 'Mis Facturas',0);
  }

  onChangeClass(position: number):void{
    let previousPosition = this.position;
    this.activeBool[this.position] = !this.activeBool[this.position];
    if(this.activeBool[position] != true){
      this.activeBool[position] = !this.activeBool[position];
    }
    this.position = position;
  }

  enviarInfo(position: number, title: string, img: number){
    this.onChangeClass(position);
    this.sendImage(img)
  }

  sendImage(option: number){
    switch(option){
      case 0:{
        this.sendInfoImage.emit(this.imagesButtons[0]);
        break;
      };
      case 1:{
        this.sendInfoImage.emit(this.imagesButtons[1]);
        break;
      }
      case 2:{
        this.sendInfoImage.emit(this.imagesButtons[2]);
        break;
      }
      default:{
        this.sendInfoImage.emit(this.imagesButtons[0]);
        break;
      }
    }

  }
}
