import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.css']
})
export class Page5Component implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
