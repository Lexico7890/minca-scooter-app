import { Component, Input, OnInit } from '@angular/core';
import {CustomerButton} from '../../interfaces/buttons';

@Component({
  selector: 'app-option-button',
  templateUrl: './option-button.component.html',
  styleUrls: ['./option-button.component.css']
})
export class OptionButtonComponent implements OnInit {

  @Input() namePath: string[] = [
   /* {
      buttonOne: '../../../assets/images/',
      buttonTwo: '../../../assets/images/',
      buttonThree: '../../../assets/images/'
    }*/
  ];
  constructor() { }

  ngOnInit(): void {
    console.log(this.namePath)
  }

  

}
