import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Day, CalenderEvent, EventTypes, CalenderEventOutput } from '../constants';
import { NgCalendarPlusService } from '../ng-calendar-plus.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ar-day-cell',
  templateUrl: './day-cell.component.html',
  styleUrls: ['./day-cell.component.scss']
})
export class DayCellComponent implements OnInit {

  @Input() day: any;
  showAllEvents = false;

  constructor(private ngCalendarPlusService: NgCalendarPlusService) { }

  ngOnInit() {
  }

  dayClick(day: Day) {
    const date = new Date(day.Year, day.Month, day.DayNumber);
    const event = new CalenderEventOutput({
      event_type: EventTypes.AddCalenderEvent,
      date: date
    });
    this.ngCalendarPlusService.setCalenderEvent(event);
  }

  toggleEvents() {
    this.showAllEvents = !this.showAllEvents;
  }

  getMonthName(month) {
    return this.ngCalendarPlusService.getMonthName(month);
  }

  eventClick(event: CalenderEvent) {
    const eventOuput = new CalenderEventOutput({
      event_type: EventTypes.CalendarEvent,
      date: event.date,
      event_name: event.event_name
    });
    this.ngCalendarPlusService.setCalenderEvent(eventOuput);
  }

}
