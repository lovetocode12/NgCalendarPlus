import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgCalendarPlusComponent } from './ng-calendar-plus.component';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayModule } from '@angular/cdk/overlay';
import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';
import { NgCalendarPlusService } from './ng-calendar-plus.service';
import { CustomDialogService } from './custom-dialog/custom-dialog.service';
import { DayCellComponent } from './day-cell/day-cell.component';
import { NgDragDropPlusModule } from 'ng-drag-drop-plus';

@NgModule({
  declarations: [
    NgCalendarPlusComponent,
    CustomDialogComponent,
    DayCellComponent
  ],
  imports: [
    BrowserModule,
    OverlayModule,
    NgDragDropPlusModule.forRoot()
  ],
  exports: [
    NgCalendarPlusComponent,
    DayCellComponent
  ],
  entryComponents: [CustomDialogComponent]
})
export class NgCalendarPlusModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgCalendarPlusModule,
      providers: [NgCalendarPlusService, CustomDialogService]
    }
  }
}
