import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page13',
  templateUrl: './page13.component.html',
  styleUrls: ['./page13.component.css']
})
export class Page13Component implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
