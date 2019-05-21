import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Day } from '../constants';
import { NgCalenderPlusService } from '../ng-calender-plus.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ar-day-cell',
  templateUrl: './day-cell.component.html',
  styleUrls: ['./day-cell.component.scss']
})
export class DayCellComponent implements OnInit {

  @Input() day: any;

  constructor(private ngCalenderPlusService: NgCalenderPlusService) { }

  ngOnInit() {
  }

  dayClick(day: Day) {
    this.ngCalenderPlusService.setCalenderEvent(day);
  }

}
