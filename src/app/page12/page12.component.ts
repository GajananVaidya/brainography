import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page12',
  templateUrl: './page12.component.html',
  styleUrls: ['./page12.component.css']
})
export class Page12Component implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

  convertString(value: string){
    return parseInt(value) + 5;
  }

}
