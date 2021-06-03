import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page23',
  templateUrl: './page23.component.html',
  styleUrls: ['./page23.component.css']
})
export class Page23Component implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
