import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-change-chart-type',
  templateUrl: './change-chart-type.component.html',
  styleUrls: ['./change-chart-type.component.scss']
})
export class ChangeChartTypeComponent implements OnInit {
  @Output()
  notify: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {}

  onClickBack() {
    this.notify.emit(false);
  }
}
