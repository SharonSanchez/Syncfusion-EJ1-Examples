import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {EJ_RTE_COMPONENTS} from 'ej-angular2/src/ej/rte.component';
import { EJAngular2Module } from 'ej-angular2';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, EJ_RTE_COMPONENTS
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }