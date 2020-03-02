import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { SolarfarmService } from 'src/app/services/solarfarm.service';

@Component({
  selector: 'app-widget-spline',
  templateUrl: './spline.component.html',
  styleUrls: ['./spline.component.scss']
})
export class SplineComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions: {};
  public chart = [];


  constructor(private service: SolarfarmService) { }

  ngOnInit(): void {
    this.service.currentMessage.subscribe(message => {if(message.estimations) this.chart = message.estimations });

    this.chartOptions = {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Random DATA'
      },
      subtitle: {
        text: 'Demo'
      },
      tooltip: {
        split: true,
        valueSuffix: ' millions'
      },
      credits: {
        enabled: false
      },
      xAxis: {
        type: 'datetime',
        tickPixelInterval: 50000,
        dateTimeLabelFormats: {

            millisecond: '%H:%M:%S.%L',
            second: '%H:%M:%S',
            minute: '%H:%M',
            hour: '%H:%M',
            day: '%e. %b',
            week: '%e. %b',
            month: '%b \'%y',
            year: '%Y'
        }
        },

      exporting: {
        enabled: true,
      },
      series: [{
        data: this.chart,
        type: 'line'
      }]
    };
    HC_exporting(Highcharts);

  }


}
