import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page26',
  templateUrl: './page26.component.html',
  styleUrls: ['./page26.component.css']
})
export class Page26Component implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }
  
  addCounter(ind: any, num: any) {
    return (ind * 4) + num;
  }

}
