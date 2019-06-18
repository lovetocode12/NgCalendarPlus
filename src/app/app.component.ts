import { Component } from '@angular/core';
import { NgCalendarPlusService } from 'ng-calendar-plus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-calender-plus-app';

  constructor(private ngCalenderPlusService: NgCalendarPlusService) {
    this.ngCalenderPlusService.getCalenderEvent().subscribe((data: any) => {
      console.log('day clicked from service', data);
    });
  }

  dayClick(data) {
    console.log('day clicked from output emitter', data);
  }
}
