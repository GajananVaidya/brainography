import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page31',
  templateUrl: './page31.component.html',
  styleUrls: ['./page31.component.css']
})
export class Page31Component implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

  addNinetyFour(height: any) {
    return parseInt(height) + 94;
  }
}
