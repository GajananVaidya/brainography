import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page7',
  templateUrl: './page7.component.html',
  styleUrls: ['./page7.component.css']
})
export class Page7Component implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

  minusTen(val: any) {
    return parseInt(val)+2;
  }

}
