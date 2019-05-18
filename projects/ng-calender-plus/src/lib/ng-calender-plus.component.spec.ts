import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCalenderPlusComponent } from './ng-calender-plus.component';

describe('NgCalenderPlusComponent', () => {
  let component: NgCalenderPlusComponent;
  let fixture: ComponentFixture<NgCalenderPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCalenderPlusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCalenderPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
