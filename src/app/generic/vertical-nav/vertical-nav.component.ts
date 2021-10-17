import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-vertical-nav',
  templateUrl: './vertical-nav.component.html',
  styleUrls: ['./vertical-nav.component.css']
})
export class VerticalNavComponent implements OnInit {

  activeBool: boolean[] = [false,false,false,false,false,false];
  position: number = 0;

  @Input() sendBooleanNav: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.enviarInfo(0, 'Mis Facturas');
  }

  onChangeClass(position: number):void{
    let previousPosition = this.position;
    this.activeBool[this.position] = !this.activeBool[this.position];
    if(this.activeBool[position] != true){
      this.activeBool[position] = !this.activeBool[position];
    }
    this.position = position;
  }

  enviarInfo(position: number, title: string){
    this.onChangeClass(position);
  }
}
