import { TestBed } from '@angular/core/testing';

import { NgCalenderPlusService } from './ng-calender-plus.service';

describe('NgCalenderPlusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgCalenderPlusService = TestBed.get(NgCalenderPlusService);
    expect(service).toBeTruthy();
  });
});
