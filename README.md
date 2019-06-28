# NgCalendarPlusApp

## Development in Progress

![Work In Progress](/images/giphy.gif)

Table of contents:
* [Installation](#installation)
* [How it works](#howitworks)
* [Usage](#usage)
* [License](#license)


## <a name="installation"></a>Installation
```
npm i ng-calendar-plus --save
```
## <a name="howitworks"></a>How it works

#### just a calender for now and will update complate usage once i completed my development

## <a name="usage"></a>Usage

Include theng-calendar-plus module in your application at any place. The recommended way is to add forRoot initialization in the main app module.
```
import { BrowserModule } from '@angular/platform-browser';
import { NgCalendarPlusModule } from 'ng-calendar-plus';

@NgModule({
    imports: [
        BrowserModule,
        NgCalendarPlusModule.forRoot()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```
#### Place this below code wherever you want to render the scheduler

```
<ar-ng-calendar-plus  (DayClick)="dayClick($event)"></ar-ng-calendar-plus>
```
# Events Available 

## DayClick  which will emit day clicked event

```
 events: CalenderEvent[] = [
    new CalenderEvent({
      event_name: 'test1',
      date: '2019-6-26'
    }),
    new CalenderEvent({
      event_name: 'test2',
      date: '2019-6-26'
    }),
    new CalenderEvent({
      event_name: 'test3',
      date: '2019-6-26'
    }),
    new CalenderEvent({
      event_name: 'test4',
      date: '2019-6-26'
    }),
    new CalenderEvent({
      event_name: 'test5',
      date: '2019-6-26'
    }),
    new CalenderEvent({
      event_name: 'test6',
      date: '2019-6-26'
    }),
    new CalenderEvent({
      event_name: 'test7',
      date: '2019-6-26'
    }),
    new CalenderEvent({
      event_name: 'test8',
      date: '2019-6-20'
    })
  ]

  constructor(private ngCalenderPlusService: NgCalendarPlusService) {
    this.ngCalenderPlusService.getCalenderEvent().subscribe((data: any) => {
      console.log('day clicked from service', data);
    });
  }

  dayClick(data) {
    console.log('day clicked from output emitter', data);
  }

  EventChange(data) {
    this.events = this.events.map((calenderEvent: CalenderEvent) => {
      if (calenderEvent.event_name === data.event.event_name
        && calenderEvent.date === data.event.date) {
        calenderEvent.date = data.newDate;
      }
      return calenderEvent;
    });
  }

```

## <a name="license">License
Licensed under MIT
