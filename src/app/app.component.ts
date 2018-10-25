import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  isChartSelected: Boolean;
  selectedItem: any;
  dataSource: Object;
  title: string;
  items: any[] = [
    { id: 1, value: 'Simple Column 2D' },
    { id: 2, value: '3D Pie Chart' },
    { id: 3, value: 'Update Chart Data' },
    { id: 4, value: 'Listen to events from chart' },
    { id: 5, value: 'Drill down' },
    { id: 6, value: 'Gauge' },
    { id: 7, value: 'Change chart type at runtime' },
    { id: 8, value: 'Multiple Themes' }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
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

  onSelect(item: any): void {
    this.selectedItem = item;
    this.isChartSelected = true;
    console.log(this.selectedItem.id);
  }

  onNotify(isChartSelected: boolean): void {
    this.isChartSelected = isChartSelected;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
