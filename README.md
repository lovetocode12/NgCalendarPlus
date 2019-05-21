# NgCalenderPlusApp

## Development in Progress
## Only Basic Features are available now
## But you can view source code at Github

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

#### just a calender for now and will update complate usage once i completed my development

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
#### Place this below code wherever you want to render the scheduler

```
<ar-ng-calender-plus  (DayClick)="dayClick($event)"></ar-ng-calender-plus>
```
# Events Available 

## DayClick  which will emit day clicked event

```
constructor(private ngCalenderPlusService: NgCalenderPlusService) {
    this.ngCalenderPlusService.getCalenderEvent().subscribe((data: any) => {
      console.log('day clicked from service', data);
    });
  }

  dayClick(data) {
    console.log('day clicked from output emitter', data);
  }

```

## <a name="license">License
Licensed under MIT