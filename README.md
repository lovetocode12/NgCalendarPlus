# NgCalenderPlusApp

# Development in Progress Please Don't install this Package But you view source code at Github

Build Status npm version

Comming soon

Table of contents:
Installation
How it works
Usage
License


Installation
npm i ng-calender-plus --save
How it works
 just a calender for now and will update complate usage once i completed my development

Usage

Include theng-calender-plus module in your application at any place. The recommended way is to add forRoot initialization in the main app module.

import { BrowserModule } from '@angular/platform-browser';
import { NgCalenderPlusModule } from 'ng-calender-plus';

@NgModule({
    imports: [
        BrowserModule,
        NgCalenderPlusModule.forRoot()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

License
Licensed under MIT