import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page30',
  templateUrl: './page30.component.html',
  styleUrls: ['./page30.component.css']
})
export class Page30Component implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
