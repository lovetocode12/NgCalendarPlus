import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.scss']
})
export class CustomDialogComponent implements OnInit {
  // Inputs
  @Input() CustomTemplate: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }

}
