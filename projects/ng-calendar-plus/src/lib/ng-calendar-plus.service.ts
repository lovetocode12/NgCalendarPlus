import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CalenderEvent, Day, MonthNames } from './constants';

@Injectable({
  providedIn: 'root'
})
export class NgCalendarPlusService {

  calenderEventEmitter = new Subject<any>();


  constructor() { }

  getCalenderEvent() {
    return this.calenderEventEmitter.asObservable();
  }

  setCalenderEvent(event: CalenderEvent) {
    this.calenderEventEmitter.next(event);
  }

  GetFormattedDate(dateObj: Date) {
    let year, month, day;
    month = dateObj.getMonth() + 1;
    day = dateObj.getDate();
    year = dateObj.getFullYear();
    return year + '-' + month + '-' + day;
  }

  GetDaterfromString(dateStr: '', dateFormat = 'yyyy-mm-dd') {
    let year, month, day;
    if (dateFormat === 'yyyy-mm-dd') {
      day = dateStr.split('-')[2];
      month = dateStr.split('-')[1];
      year = dateStr.split('-')[0];
    }
    return new Date(year, month, day);
  }

  GetFormattedDateByDay(date: Day) {
    let year, month, day;
    month = date.Month + 1;
    day = date.DayNumber;
    year = date.Year;
    return year + '-' + month + '-' + day;
  }

  getMonthName(month) {
    return MonthNames[month];
  }
}


