import { Component, OnInit,Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-multiaxes',
  templateUrl: './multiaxes.component.html',
  styleUrls: ['./multiaxes.component.scss']
})
export class MultiaxesComponent implements OnInit {

  @Input('axe1') axe1:any;
  @Input('axe2') axe2:any;
  @Input('axe3') axe3:any;
  @Input('time') time:any;

  Highcharts = Highcharts;
  chartOptions: {};

  constructor() { }

  ngOnInit(): void {

    this.chartOptions = {
      chart: {
          zoomType: 'xy'
      },
      title: {
          text: 'Sun path and pv power generated today',
          align: 'left'
      },
      xAxis: [{
          categories: this.time,
          crosshair: true,
          title: {
            text: 'Time',
        },
          
      }],
      yAxis: [{ // Primary yAxis
          labels: {
              format: '{value}°',
              style: {
                  color: Highcharts.getOptions().colors[2]
              }
          },
          title: {
              text: 'Azimuth',
              style: {
                  color: Highcharts.getOptions().colors[2]
              }
          },
          opposite: true
  
      }, { // Secondary yAxis
          gridLineWidth: 0,
          title: {
              text: 'PV power',
              style: {
                  color: Highcharts.getOptions().colors[0]
              }
          },
          labels: {
              format: '{value} kw',
              style: {
                  color: Highcharts.getOptions().colors[0]
              }
          }
  
      }, { // Tertiary yAxis
          gridLineWidth: 0,
          title: {
              text: 'Altitude',
              style: {
                  color: Highcharts.getOptions().colors[1]
              }
          },
          labels: {
              format: '{value}° ',
              style: {
                  color: Highcharts.getOptions().colors[1]
              }
          },
          opposite: true
      }],
      tooltip: {
          shared: true
      },
      legend: {
          layout: 'vertical',
          align: 'left',
          x: 80,
          verticalAlign: 'top',
          y: 55,
          floating: true,
          backgroundColor:
              Highcharts.defaultOptions.legend.backgroundColor || // theme
              'rgba(255,255,255,0.25)'
      },
      series: [{
          name: 'PV power',
          type: 'column',
          yAxis: 1,
          data: this.axe1,
          tooltip: {
              valueSuffix: ' Kw'
          }
  
      }, {
          name: 'Altitude',
          type: 'spline',
          yAxis: 2,
          data: this.axe2,
          marker: {
              enabled: false
          },
          dashStyle: 'shortdot',
          tooltip: {
              valueSuffix: ' mb'
          }
  
      }, {
          name: 'Azimuth',
          type: 'spline',
          data: this.axe3,
          tooltip: {
              valueSuffix: ' °'
          }
      }],
      responsive: {
          rules: [{
              condition: {
                  maxWidth: 500
              },
              chartOptions: {
                  legend: {
                      floating: false,
                      layout: 'horizontal',
                      align: 'center',
                      verticalAlign: 'bottom',
                      x: 0,
                      y: 0
                  },
                  yAxis: [{
                      labels: {
                          align: 'right',
                          x: 0,
                          y: -6
                      },
                      showLastLabel: false
                  }, {
                      labels: {
                          align: 'left',
                          x: 0,
                          y: -6
                      },
                      showLastLabel: false
                  }, {
                      visible: false
                  }]
              }
          }]
      }
  
  }
    HC_exporting(Highcharts);
  }

}
