import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page21',
  templateUrl: './page21.component.html',
  styleUrls: ['./page21.component.css']
})
export class Page21Component implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

  addTwelve(height: any) {
    return parseInt(height) + 12;
  }

}
