import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Day } from '../constants';
import { NgCalendarPlusService } from '../ng-calendar-plus.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ar-day-cell',
  templateUrl: './day-cell.component.html',
  styleUrls: ['./day-cell.component.scss']
})
export class DayCellComponent implements OnInit {

  @Input() day: any;

  constructor(private ngCalendarPlusService: NgCalendarPlusService) { }

  ngOnInit() {
  }

  dayClick(day: Day) {
    this.ngCalendarPlusService.setCalenderEvent(day);
  }

}
