import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page16',
  templateUrl: './page16.component.html',
  styleUrls: ['./page16.component.css']
})
export class Page16Component implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
