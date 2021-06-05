import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page19',
  templateUrl: './page19.component.html',
  styleUrls: ['./page19.component.css']
})
export class Page19Component implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
