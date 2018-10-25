import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as Widgets from 'fusioncharts/fusioncharts.widgets';
import * as Fusion from 'fusioncharts/themes/fusioncharts.theme.fusion';
import * as Ocean from 'fusioncharts/themes/fusioncharts.theme.ocean';
import * as Fint from 'fusioncharts/themes/fusioncharts.theme.fint';
import * as Gammel from 'fusioncharts/themes/fusioncharts.theme.gammel';
import * as Candy from 'fusioncharts/themes/fusioncharts.theme.candy';
import * as Zune from 'fusioncharts/themes/fusioncharts.theme.zune';
import * as Carbon from 'fusioncharts/themes/fusioncharts.theme.carbon';

import { PlainColumnComponent } from './plain-column/plain-column.component';
import { PieChart3DComponent } from './pie-chart3-d/pie-chart3-d.component';
import { UpdateChartDataComponent } from './update-chart-data/update-chart-data.component';
import { EventListenComponent } from './event-listen/event-listen.component';
import { DrillDownComponent } from './drill-down/drill-down.component';
import { GaugeComponent } from './gauge/gauge.component';
import { ChangeChartTypeComponent } from './change-chart-type/change-chart-type.component';
import { MultipleThemeComponent } from './multiple-theme/multiple-theme.component';

FusionChartsModule.fcRoot(
  FusionCharts,
  Charts,
  Widgets,
  Fusion,
  Ocean,
  Fint,
  Gammel,
  Candy,
  Zune,
  Carbon
);

@NgModule({
  declarations: [
    AppComponent,
    PlainColumnComponent,
    PieChart3DComponent,
    UpdateChartDataComponent,
    EventListenComponent,
    DrillDownComponent,
    GaugeComponent,
    ChangeChartTypeComponent,
    MultipleThemeComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    FusionChartsModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
