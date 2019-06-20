import { Component } from '@angular/core';
import { NgCalendarPlusService } from 'ng-calendar-plus';
import { CalenderEvent } from 'ng-calendar-plus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-calender-plus-app';
  events: CalenderEvent[] = [
    new CalenderEvent({
      event_name: 'test1sdsadsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
      date: new Date()
    }),
    new CalenderEvent({
      event_name: 'test2',
      date: new Date()
    }),
    new CalenderEvent({
      event_name: 'test3',
      date: new Date()
    }),
    new CalenderEvent({
      event_name: 'test4',
      date: new Date()
    }),
    new CalenderEvent({
      event_name: 'test5',
      date: new Date()
    }),
    new CalenderEvent({
      event_name: 'test6',
      date: new Date()
    }),
    new CalenderEvent({
      event_name: 'test7',
      date: new Date()
    }),
    new CalenderEvent({
      event_name: 'test8',
      date: new Date(2019, 5, 21)
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
}
