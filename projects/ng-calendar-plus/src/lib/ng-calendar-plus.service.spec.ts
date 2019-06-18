import { TestBed } from '@angular/core/testing';

import { NgCalendarPlusService } from './ng-calendar-plus.service';

describe('NgCalendarPlusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgCalendarPlusService = TestBed.get(NgCalendarPlusService);
    expect(service).toBeTruthy();
  });
});
