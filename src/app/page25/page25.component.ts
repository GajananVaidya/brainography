import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page25',
  templateUrl: './page25.component.html',
  styleUrls: ['./page25.component.css']
})
export class Page25Component implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
