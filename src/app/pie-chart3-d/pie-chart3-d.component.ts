import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pie-chart3-d',
  templateUrl: './pie-chart3-d.component.html',
  styleUrls: ['./pie-chart3-d.component.scss']
})
export class PieChart3DComponent implements OnInit {
  dataSource: any;
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

  onClickBack() {
    this.notify.emit(false);
  }

  ngOnInit() {}
}
