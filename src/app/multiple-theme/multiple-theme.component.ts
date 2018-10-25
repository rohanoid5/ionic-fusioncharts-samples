import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-multiple-theme',
  templateUrl: './multiple-theme.component.html',
  styleUrls: ['./multiple-theme.component.scss']
})
export class MultipleThemeComponent implements OnInit {
  @Output()
  notify: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {}

  onClickBack() {
    this.notify.emit(false);
  }
}
