import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Page6Component } from './page6/page6.component';
import { Page7Component } from './page7/page7.component';
import { FooterComponent } from './footer/footer.component';
import { Page8Component } from './page8/page8.component';
import { Page9Component } from './page9/page9.component';
import { Page10Component } from './page10/page10.component';

@NgModule({
  declarations: [
    AppComponent,
    Page6Component,
    Page7Component,
    FooterComponent,
    Page8Component,
    Page9Component,
    Page10Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
