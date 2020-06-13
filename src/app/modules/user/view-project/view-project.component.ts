import { ProjectService } from 'src/app/services/project/project.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import * as fileSaver from 'file-saver';
import { HttpResponse } from '@angular/common/http';
import {FileService} from '../../../services/file/file.service';
import { from } from 'rxjs';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.scss']
})
export class ViewProjectComponent implements OnInit {
  id=null;
  estimations=0;
  forecast=0;
  sunPath=null;
  project=null;
  area = [];
  center : any;
  estimation_data = [];
  forecast_data = [];
  altitude = [];
  azimuth = [];
  sun_hours = [];
  pv_today = [];
  pv_today_temp =[]
  panelNumber = 0;
  previous_power = 0;
  next_power = 0;
  surface = '0';
  pdfSrc = null;
  capacity = 0;
  country = "world";
  currency = "EU";
  direction = "south";
  tilt = 0;
  price = 0;
  sunrise = '00:00';
  sunset = '00:00';
  solarnoon = '00:00';
  total_pv = 0;
  total_value = 0;
  title1="production in the next 6 days"
  title2="production in the past 6 days"
  constructor(private route: ActivatedRoute, private service:ProjectService,private spinner: NgxSpinnerService,private fileService:FileService) { }

  ngOnInit(): void {
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
    
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.service.getprojectDetails(this.id).subscribe(
      p=>{
          this.project = p.project;
          this.sunset = p.sunset;
          this.sunrise = p.sunrise;
          this.solarnoon = p.solarnoon;
          this.capacity = p.project.panel.capacity * p.project.panel_number;
          this.surface = Number(p.project.surface).toFixed();
          this.direction = p.project.direction;
          this.tilt = p.project.tilt;
          this.country = p.project.country;
          this.price = p.project.price;
          this.currency = p.project.currency;
          this.panelNumber = this.project.panel_number;
          this.total_pv = Number(this.project.total_prod.toFixed());
          this.total_value = this.total_pv*this.project.price
          this.center = {lat: this.project.lat,lng: this.project.lon};
          this.project.area.forEach(point => {
          this.area.push({lat:point.lat,lng:point.lon});           
          });
          this.project.next_prod.forEach(next => {
            
            let x = moment(next[0].date_time).tz(this.project.timezone).date();
            this.forecast+=next[0].pv;
            this.forecast_data.push({'name':x,y:next[0].pv,drilldown:null});}
          )
          this.project.previous_prod.forEach(pre => {
            let x = moment(pre[0].date_time).tz(this.project.timezone).date();
            this.estimations+=pre[0].pv;
            this.estimation_data.push({'name':x,y:pre[0].pv,drilldown:null});
          });


          for(let i=Number(this.sunrise.split(':')[0]);i<=Number(this.sunset.split(':')[0])+1;i++)
          {
            this.pv_today_temp.push({'time':i,'pv':0});
          }
          this.project.prod_today.forEach(today => {
            let x = moment(today[0].date_time).tz(this.project.timezone).hours();
            for(let i=0;i<this.pv_today_temp.length;i++)
            {
             if(x == this.pv_today_temp[i].time)
             {
               this.pv_today_temp[i].pv+=today[0].pv;
             }
            }  
          });
          this.pv_today_temp.forEach(x => {
            this.sun_hours.push(x.time);
            this.pv_today.push(x.pv);
            
          });

          this.azimuth = [];
          this.altitude = [];
          this.estimation_data.reverse();
          this.estimations = Number(this.estimations.toFixed());
          this.forecast = Number(this.forecast.toFixed());
          this.service.getSunPath(this.id).subscribe(s =>{
            console.log(s);
            s.forEach(x => {
              this.azimuth.push(x.azimuth);
              this.altitude.push(x.solar_elevation);
            })
            console.log({'waqt':this.sun_hours,'pvtoday':this.pv_today,'altitude':this.altitude,'azimuth':this.azimuth});
            
          });

          
        }
      ,err=>{console.log(err)}
    );
    



   

    this.fileService.downloadFile(this.id).subscribe(response => {
			//let blob:any = new Blob([response.blob()], { type: 'text/json; charset=utf-8' });
			//const url= window.URL.createObjectURL(blob);
			//window.open(url);
      this.pdfSrc = response.url;
			//fileSaver.saveAs(blob, 'employees.json');
		}), error => console.log('Error downloading the file'),
                 () => console.info('File downloaded successfully');
    
   
  }



}
