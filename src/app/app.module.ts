import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgCalenderPlusModule } from 'ng-calender-plus';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCalenderPlusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
