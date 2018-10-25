import { Component, OnInit, EventEmitter, Output, NgZone } from '@angular/core';

@Component({
  selector: 'app-event-listen',
  templateUrl: './event-listen.component.html',
  styleUrls: ['./event-listen.component.scss']
})
export class EventListenComponent implements OnInit {
  dataSource: any;
  selectedValue = 'Tap on any data plot';
  @Output()
  notify: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private zone: NgZone) {
    this.dataSource = {
      chart: {
        caption: 'Countries With Most Oil Reserves [2017-18]',
        subCaption: 'In MMbbl = One Million barrels',
        xAxisName: 'Country',
        yAxisName: 'Reserves (MMbbl)',
        numberSuffix: 'K',
        theme: 'fusion'
      },
      data: [
        {
          label: 'Venezuela',
          value: '290'
        },
        {
          label: 'Saudi',
          value: '260'
        },
        {
          label: 'Canada',
          value: '180'
        },
        {
          label: 'Iran',
          value: '140'
        },
        {
          label: 'Russia',
          value: '115'
        },
        {
          label: 'UAE',
          value: '100'
        },
        {
          label: 'US',
          value: '30'
        },
        {
          label: 'China',
          value: '30'
        }
      ]
    };
  }

  ngOnInit() {}

  onClickBack() {
    this.notify.emit(false);
  }

  update($event) {
    this.zone.run(() => {
      this.selectedValue = 'You tapped on ' + $event.dataObj.categoryLabel;
      // console.log($event.dataObj);
    });
  }
}
