import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-listen',
  templateUrl: './event-listen.component.html',
  styleUrls: ['./event-listen.component.scss']
})
export class EventListenComponent implements OnInit {
  dataSource: any;
  @Output()
  notify: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  onClickBack() {
    this.notify.emit(false);
  }
}
