import { Component, OnInit } from '@angular/core';
import { DialogOverlayRef, CustomDialogService } from './custom-dialog/custom-dialog.service';
import { MonthNames, Day } from './constants';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ar-ng-calender-plus',
  templateUrl: './ng-calender-plus.component.html',
  styleUrls: ['./ng-calender-plus.component.scss']
})
export class NgCalenderPlusComponent implements OnInit {
  date = new Date();
  daysInMonths = [];
  currentMonth = this.date.getMonth();
  currentYear = this.date.getFullYear();
  constructor(private dialogService: CustomDialogService) {
    // this.showPreview();
  }


  showPreview() {
    const dialogRef: DialogOverlayRef = this.dialogService.open();
    setTimeout(() => {
      dialogRef.close();
    }, 2000);
  }

  ngOnInit() {
    this.LoadMonth();
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
      this.daysInMonths.push(new Day({
        DayNumber: lastDayPrevMonth - index + 1,
        DayOfTheWeek: firstDayOfTheWeek - index,
        Month: prevMonth,
        Year: prevYear,
        WeekNumber: weekNumber,
        Disable: true
      }));
    }

    // to add current months days
    for (let index = firstDay; index <= lastday; index++) {
      if (new Date(year, month, index).getDay() === 0) {
        weekNumber++;
      }
      this.daysInMonths.push(new Day({
        DayNumber: index,
        DayOfTheWeek: new Date(year, month, index).getDay(),
        Month: month,
        Year: year,
        WeekNumber: weekNumber,
        IsToday: (index === this.date.getDate() && month === this.date.getMonth() && year === this.date.getFullYear()) ? true : false
      }));
    }

    // to add next month days in present month
    let firstDayNextMonth = 1;
    for (let index = lastDayOfTheWeek; index < 6; index++) {
      this.daysInMonths.push(new Day({
        DayNumber: firstDayNextMonth,
        DayOfTheWeek: index + 1,
        Month: nextMonth,
        Year: nextYear,
        WeekNumber: weekNumber,
        Disable: true,
      }));
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
    return MonthNames[this.currentMonth];
  }
}

