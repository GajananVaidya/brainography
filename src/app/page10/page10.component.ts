import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page10',
  templateUrl: './page10.component.html',
  styleUrls: ['./page10.component.css']
})
export class Page10Component implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
