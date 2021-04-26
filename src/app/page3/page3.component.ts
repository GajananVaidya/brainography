import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
