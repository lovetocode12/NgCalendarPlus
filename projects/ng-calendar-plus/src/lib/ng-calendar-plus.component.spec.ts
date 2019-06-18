import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgCalendarPlusComponent } from './ng-calendar-plus.component';

describe('NgCalendarPlusComponent', () => {
  let component: NgCalendarPlusComponent;
  let fixture: ComponentFixture<NgCalendarPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgCalendarPlusComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCalendarPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
