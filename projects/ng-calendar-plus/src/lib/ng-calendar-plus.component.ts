import {
  Component, OnInit, Output, EventEmitter, Input, TemplateRef, AfterViewChecked, ContentChild,
  ViewChild, ViewContainerRef, ComponentFactoryResolver
} from '@angular/core';
import { DialogOverlayRef, CustomDialogService } from './custom-dialog/custom-dialog.service';
import { MonthNames, Day, WeekDays, CalenderEvent } from './constants';
import { NgCalendarPlusService } from './ng-calendar-plus.service';
import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ar-ng-calendar-plus',
  templateUrl: './ng-calendar-plus.component.html',
  styleUrls: ['./ng-calendar-plus.component.scss']
})
export class NgCalendarPlusComponent implements OnInit {

  // Inputs
  @Input() CustomTemplate: TemplateRef<any>;
  @Input() Events: CalenderEvent[] = [];
  // Outputs
  @Output() DayClick = new EventEmitter<Day>();

  date = new Date();
  daysInMonths = [];
  weekDays = WeekDays;
  currentMonth = this.date.getMonth();
  currentYear = this.date.getFullYear();

  constructor(private dialogService: CustomDialogService, private ngCalendarPlusService: NgCalendarPlusService,
    public vcr: ViewContainerRef) {
  }

  ngOnInit() {
    this.LoadMonth();
    this.ngCalendarPlusService.getCalenderEvent().subscribe((data) => {
      this.DayClick.emit(data);
    });
  }

  showPreview() {
    const dialogRef: DialogOverlayRef = this.dialogService.open(this.CustomTemplate, this.vcr);
    dialogRef.close();
  }


  LoadMonth(month = this.date.getMonth(), year = this.date.getFullYear()) {
    this.daysInMonths = [];
    this.currentMonth = month;
    this.currentYear = year;
    const prevMonth = month === 0 ? 11 : month - 1;
    const nextMonth = month === 11 ? 0 : month + 1;
    const prevYear = month === 0 ? year - 1 : year;
    const nextYear = month === 11 ? year + 1 : year;
    const lastDayPrevMonth = new Date(prevYear, prevMonth + 1, 0).getDate();
    // const firstDayNextMonth = new Date(nextYear, nextMonth, 1).getDate();
    const firstDay = new Date(year, month, 1).getDate();
    const lastday = new Date(year, month + 1, 0).getDate();
    const firstDayOfTheWeek = new Date(year, month, 1).getDay();
    const lastDayOfTheWeek = new Date(year, month + 1, 0).getDay();

    let weekNumber = 1;
    // to add prev month days in present month
    for (let index = firstDayOfTheWeek; index > 0; index--) {
      const prevMonthDay = new Day({
        DayNumber: lastDayPrevMonth - index + 1,
        DayOfTheWeek: firstDayOfTheWeek - index,
        Month: prevMonth,
        Year: prevYear,
        WeekNumber: weekNumber,
        Disable: true
      });
      prevMonthDay.Events = this.getEventsByDate(prevMonthDay);
      this.daysInMonths.push(prevMonthDay);
    }
    if (firstDayOfTheWeek === 0) {
      weekNumber--;
    }

    // to add current months days
    for (let index = firstDay; index <= lastday; index++) {
      if (new Date(year, month, index).getDay() === 0) {
        weekNumber++;
      }
      const day = new Day({
        DayNumber: index,
        DayOfTheWeek: new Date(year, month, index).getDay(),
        Month: month,
        Year: year,
        WeekNumber: weekNumber,
        IsToday: (index === this.date.getDate() && month === this.date.getMonth() && year === this.date.getFullYear()) ? true : false
      });
      day.Events = this.getEventsByDate(day);
      this.daysInMonths.push(day);
    }

    // to add next month days in present month
    let firstDayNextMonth = 1;
    for (let index = lastDayOfTheWeek; index < 6; index++) {
      const nextMonthDay = new Day({
        DayNumber: firstDayNextMonth,
        DayOfTheWeek: index + 1,
        Month: nextMonth,
        Year: nextYear,
        WeekNumber: weekNumber,
        Disable: true,
      });
      nextMonthDay.Events = this.getEventsByDate(nextMonthDay);
      this.daysInMonths.push(nextMonthDay);
      firstDayNextMonth++;
    }
  }

  getDay(weekNumber, weekDay) {
    return this.daysInMonths.filter((day: Day, index) => {
      return day.DayOfTheWeek === weekDay && day.WeekNumber === weekNumber;
    })[0]; //.map((day: Day) => day.DayNumber);
  }

  nextMonthClick() {
    if (this.currentMonth === 11) {
      this.currentYear++;
      this.currentMonth = 0;
    } else {
      this.currentMonth++;
    }
    this.LoadMonth(this.currentMonth, this.currentYear);
  }

  prevMonthClick() {
    if (this.currentMonth === 0) {
      this.currentYear--;
      this.currentMonth = 11;
    } else {
      this.currentMonth--;
    }
    this.LoadMonth(this.currentMonth, this.currentYear);
  }

  getMonthName() {
    return this.ngCalendarPlusService.getMonthName(this.currentMonth);
  }

  getEventsByDate(day: Day) {
    return this.Events.filter((event) => this.ngCalendarPlusService.GetFormattedDate(event.date) ===
      this.ngCalendarPlusService.GetFormattedDateByDay(day));
  }

}

