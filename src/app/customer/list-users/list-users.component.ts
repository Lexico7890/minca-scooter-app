import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  prueba: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  enviarInfo(dato: string){
    this.prueba = dato;
  }

}
