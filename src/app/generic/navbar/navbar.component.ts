import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {faUser, faBars} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  viewVerticalNav: boolean = false;
  @Output() sentView = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeVerticalNav(bool: boolean){
    this.viewVerticalNav = !this.viewVerticalNav;
    this.sentView.emit(this.viewVerticalNav);
  }

}
