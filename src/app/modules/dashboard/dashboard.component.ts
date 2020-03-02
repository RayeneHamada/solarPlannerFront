import { SolarfarmService } from './../../services/solarfarm.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

declare const google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public numero;
  public chart;
  constructor(private service: SolarfarmService) {
  }


  ngOnInit(): void {
    this.service.currentMessage.subscribe(message => this.numero = message.numberofpanels);
  }
}
