import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgCalenderPlusComponent } from './ng-calender-plus.component';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayModule } from '@angular/cdk/overlay';
import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';
import { NgCalenderPlusService } from './ng-calender-plus.service';
import { CustomDialogService } from './custom-dialog/custom-dialog.service';
import { DayCellComponent } from './day-cell/day-cell.component';

@NgModule({
  declarations: [NgCalenderPlusComponent, CustomDialogComponent, DayCellComponent],
  imports: [BrowserModule, OverlayModule
  ],
  exports: [NgCalenderPlusComponent, DayCellComponent],
  entryComponents: [CustomDialogComponent]
})
export class NgCalenderPlusModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgCalenderPlusModule,
      providers: [NgCalenderPlusService, CustomDialogService]
    }
  }
}
