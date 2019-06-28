import { Component, ChangeDetectionStrategy } from '@angular/core';
// import { NgCalendarPlusService } from 'ng-calendar-plus';
import { CalenderEvent } from 'ng-calendar-plus';
import { NgCalendarPlusService } from 'projects/ng-calendar-plus/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {
  title = 'ng-calender-plus-app';
  events: CalenderEvent[] = [
    new CalenderEvent({
      event_name: 'test1sdsadsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
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

}
