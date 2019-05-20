import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgCalenderPlusComponent } from './ng-calender-plus.component';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayModule } from '@angular/cdk/overlay';
import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';
import { NgCalenderPlusService } from './ng-calender-plus.service';
import { CustomDialogService } from './custom-dialog/custom-dialog.service';

@NgModule({
  declarations: [NgCalenderPlusComponent, CustomDialogComponent],
  imports: [BrowserModule, OverlayModule
  ],
  exports: [NgCalenderPlusComponent],
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
