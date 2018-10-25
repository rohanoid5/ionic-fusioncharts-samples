import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-plain-column',
  templateUrl: './plain-column.component.html',
  styleUrls: ['./plain-column.component.scss']
})
export class PlainColumnComponent implements OnInit {
  dataSource: Object;
  title: string;
  @Output()
  notify: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
    this.title = 'Angular  FusionCharts Sample';

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
        { label: 'Venezuela', value: '290' },
        { label: 'Saudi', value: '260' },
        { label: 'Canada', value: '180' },
        { label: 'Iran', value: '140' },
        { label: 'Russia', value: '115' },
        { label: 'UAE', value: '100' },
        { label: 'US', value: '30' },
        { label: 'China', value: '30' }
      ]
    };
  }

  onClickBack() {
    this.notify.emit(false);
  }

  ngOnInit() {}
}
