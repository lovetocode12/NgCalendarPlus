import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgCalendarPlusModule } from 'projects/ng-calendar-plus/src/public_api';
// import { NgCalendarPlusModule } from 'ng-calendar-plus';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCalendarPlusModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
