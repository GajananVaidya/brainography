import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Page6Component } from './page6/page6.component';
import { Page7Component } from './page7/page7.component';
import { FooterComponent } from './footer/footer.component';
import { Page8Component } from './page8/page8.component';
import { Page9Component } from './page9/page9.component';
import { Page10Component } from './page10/page10.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';
import { Page11Component } from './page11/page11.component';
import { Page12Component } from './page12/page12.component';

@NgModule({
  declarations: [
    AppComponent,
    Page6Component,
    Page7Component,
    FooterComponent,
    Page8Component,
    Page9Component,
    Page10Component,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component,
    Page11Component,
    Page12Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
