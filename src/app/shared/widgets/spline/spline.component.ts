import { Component, OnInit,Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-spline',
  templateUrl: './spline.component.html',
  styleUrls: ['./spline.component.scss']
})
export class SplineComponent implements OnInit {

  @Input('data') data:any;
  @Input('time') time:any;

  Highcharts = Highcharts;
  chartOptions: {};


  constructor() { }

  ngOnInit(): void {

    this.chartOptions = {
      chart: {
          type: 'spline'
      },
      title: {
          text: 'Monthly Average Temperature'
      },
      subtitle: {
          text: 'Source: WorldClimate.com'
      },
      xAxis: {
          categories: this.time
      },
      yAxis: {
          title: {
              text: 'PV power'
          },
          labels: {
              formatter: function () {
                  return this.value + 'Kw';
              }
          }
      },
      tooltip: {
          crosshairs: true,
          shared: true
      },
      plotOptions: {
          spline: {
              marker: {
                  radius: 4,
                  lineColor: '#666666',
                  lineWidth: 1
              }
          }
      },
      series: [{
          name: 'Tokyo',
          marker: {
              symbol: 'square'
          },
          data: this.data
  
      }]
  }
    HC_exporting(Highcharts);

  }


}
