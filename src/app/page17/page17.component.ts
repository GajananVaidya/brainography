import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page17',
  templateUrl: './page17.component.html',
  styleUrls: ['./page17.component.css']
})
export class Page17Component implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
