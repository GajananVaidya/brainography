import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
