# NgCalenderPlusApp

# Development in Progress Please Don't install this Package But you view source code at Github

Build Status npm version

Comming soon

![Work In Progress](/images/giphy.gif)

Table of contents:
* [Installation](#installation)
* [How it works](#howitworks)
* [Usage](#usage)
* [License](#license)


## <a name="installation"></a>Installation
```
npm i ng-calender-plus --save
```
## <a name="howitworks"></a>How it works

 ####just a calender for now and will update complate usage once i completed my development

## <a name="usage"></a>Usage

Include theng-calender-plus module in your application at any place. The recommended way is to add forRoot initialization in the main app module.
```
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
```
## <a name="license">License
Licensed under MIT