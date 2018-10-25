import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-drill-down',
  templateUrl: './drill-down.component.html',
  styleUrls: ['./drill-down.component.scss']
})
export class DrillDownComponent implements OnInit {
  chartInstance: any = {};
  initialized(e) {
    this.chartInstance = e.chart;
    // Configure the drill down chart
    this.chartInstance.configureLink({
      type: 'pie2d',
      width: '100%',
      overlayButton: {
        message: 'Back',
        fontColor: '880000',
        bgColor: 'FFEEEE',
        borderColor: '660000'
      }
    });
  }

  dataSource = {
    chart: {
      caption: 'Sales of top 3 juice flavors last year',
      subcaption: 'Click on a column to see details',
      xaxisname: 'Flavor',
      yaxisname: 'Amount (In USD)',
      numberprefix: '$',
      theme: 'fusion',
      rotateValues: '0'
    },
    data: [
      {
        label: 'Apple',
        value: '810000',
        link: 'newchart-xml-apple'
      },
      {
        label: 'Cranberry',
        value: '620000',
        link: 'newchart-xml-cranberry'
      },
      {
        label: 'Grape',
        value: '350000',
        link: 'newchart-xml-grapes'
      }
    ],
    linkeddata: [
      {
        id: 'apple',
        linkedchart: {
          chart: {
            caption: 'Apple Juice - Quarterly Sales',
            subcaption: 'Last year',
            numberprefix: '$',
            theme: 'fusion',
            rotateValues: '0',
            plottooltext: '$label, $dataValue,  $percentValue'
          },
          data: [
            {
              label: 'Q1',
              value: '157000'
            },
            {
              label: 'Q2',
              value: '172000'
            },
            {
              label: 'Q3',
              value: '206000'
            },
            {
              label: 'Q4',
              value: '275000'
            }
          ]
        }
      },
      {
        id: 'cranberry',
        linkedchart: {
          chart: {
            caption: 'Cranberry Juice - Quarterly Sales',
            subcaption: 'Last year',
            numberprefix: '$',
            theme: 'fusion',
            plottooltext: '$label, $dataValue,  $percentValue'
          },
          data: [
            {
              label: 'Q1',
              value: '102000'
            },
            {
              label: 'Q2',
              value: '142000'
            },
            {
              label: 'Q3',
              value: '187000'
            },
            {
              label: 'Q4',
              value: '189000'
            }
          ]
        }
      },
      {
        id: 'grapes',
        linkedchart: {
          chart: {
            caption: 'Grape Juice - Quarterly Sales',
            subcaption: 'Last year',
            numberprefix: '$',
            theme: 'fusion',
            rotateValues: '0',
            plottooltext: '$label, $dataValue,  $percentValue'
          },
          data: [
            {
              label: 'Q1',
              value: '45000'
            },
            {
              label: 'Q2',
              value: '72000'
            },
            {
              label: 'Q3',
              value: '95000'
            },
            {
              label: 'Q4',
              value: '108000'
            }
          ]
        }
      }
    ]
  };
  @Output()
  notify: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {}

  onClickBack() {
    this.notify.emit(false);
  }
}
