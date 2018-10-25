import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-multiple-theme',
  templateUrl: './multiple-theme.component.html',
  styleUrls: ['./multiple-theme.component.scss']
})
export class MultipleThemeComponent implements OnInit {
  dataSource: any;
  chartObj: any;
  theme: string = 'fusion';
  @Output()
  notify: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {
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

  onClickBack() {
    this.notify.emit(false);
  }

  initialized($event) {
    this.chartObj = $event.chart;
  }

  onSelectionChange(theme) {
    this.theme = theme;
    this.chartObj.setChartAttribute('theme', this.theme);
    console.log(theme);
  }
}
