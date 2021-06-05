import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page22',
  templateUrl: './page22.component.html',
  styleUrls: ['./page22.component.css']
})
export class Page22Component implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
