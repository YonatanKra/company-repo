import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CardsGridModule } from '@unicorn/cards-grid';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, CardsGridModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
