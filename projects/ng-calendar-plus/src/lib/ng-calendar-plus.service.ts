import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgCalendarPlusService {

  calenderEventEmitter = new Subject<any>();


  constructor() { }

  getCalenderEvent() {
    return this.calenderEventEmitter.asObservable();
  }

  setCalenderEvent(calenderEvent) {
    this.calenderEventEmitter.next(calenderEvent);
  }
}
