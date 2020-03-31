import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imkerei',
  templateUrl: './imkerei.component.html',
  styleUrls: ['./imkerei.component.scss']
})
export class ImkereiComponent implements OnInit {
    simpleSlider = 40;
    doubleSlider = [20, 60];
    state_default: boolean = true;
    focus: any;
    constructor() { }

    ngOnInit() {}

}
