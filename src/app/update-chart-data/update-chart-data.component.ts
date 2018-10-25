import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-update-chart-data',
  templateUrl: './update-chart-data.component.html',
  styleUrls: ['./update-chart-data.component.scss']
})
export class UpdateChartDataComponent implements OnInit {
  dataSource: any;
  @Output()
  notify: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
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

  //This function generates random number to update the chart data.
  getRandomNumber = function() {
    var max = 290,
      min = 30;
    return Math.round((max - min) * Math.random() + min);
  };
  updateMyChartData() {
    this.dataSource.data[2].value = this.getRandomNumber();
    this.dataSource.data[3].value = this.getRandomNumber();
  }

  onClickBack() {
    this.notify.emit(false);
  }

  ngOnInit() {}
}
