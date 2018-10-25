import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-drill-down',
  templateUrl: './drill-down.component.html',
  styleUrls: ['./drill-down.component.scss']
})
export class DrillDownComponent implements OnInit {
  @Output()
  notify: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {}

  onClickBack() {
    this.notify.emit(false);
  }
}
