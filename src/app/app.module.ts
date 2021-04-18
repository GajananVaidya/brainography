import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Page6Component } from './page6/page6.component';
import { Page7Component } from './page7/page7.component';

@NgModule({
  declarations: [
    AppComponent,
    Page6Component,
    Page7Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
