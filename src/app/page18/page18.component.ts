import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page18',
  templateUrl: './page18.component.html',
  styleUrls: ['./page18.component.css']
})
export class Page18Component implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
