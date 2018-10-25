import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-change-chart-type',
  templateUrl: './change-chart-type.component.html',
  styleUrls: ['./change-chart-type.component.scss']
})
export class ChangeChartTypeComponent implements OnInit {
  dataSource: any;
  chartObj: any;
  chart: any = 'column2d';

  @Output()
  notify: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {
    this.dataSource = {
      chart: {
        caption: 'Recommended Portfolio Split',
        subCaption: 'For a net-worth of $1M',
        showValues: '1',
        showPercentInTooltip: '0',
        numberPrefix: '$',
        enableMultiSlicing: '1',
        theme: 'fusion'
      },
      data: [
        {
          label: 'Equity',
          value: '300000'
        },
        {
          label: 'Debt',
          value: '230000'
        },
        {
          label: 'Bullion',
          value: '180000'
        },
        {
          label: 'Real-estate',
          value: '270000'
        },
        {
          label: 'Insurance',
          value: '20000'
        }
      ]
    };
  }

  ngOnInit() {}

  onClickBack() {
    this.notify.emit(false);
  }

  initialized($event) {
    this.chartObj = $event.chart; // saving chart instance
  }

  onSelectionChange(chart) {
    this.chart = chart;
    this.chartObj.chartType(chart); // Changing chart type using chart instance
  }
}
