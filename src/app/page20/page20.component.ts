import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page20',
  templateUrl: './page20.component.html',
  styleUrls: ['./page20.component.css']
})
export class Page20Component implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

  getHeight(height: any) {
    // var a = 85 * (parseInt(height)/100);
    return parseInt(height) * 2;
  }

  getBottom(bottom: any) {
    return (parseInt(bottom) * 2) + 20;
  }

}
