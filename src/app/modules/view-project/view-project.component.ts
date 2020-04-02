import { ProjectService } from 'src/app/services/project.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.scss']
})
export class ViewProjectComponent implements OnInit {
  id=null;
  estimations=null;
  project=null;
  area = [];
  center : any;
  power7 = 0;
  data = [];
  time = [];
  panelNumber = 0;
  constructor(private route: ActivatedRoute, private service:ProjectService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
    
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.service.getprojectDetails(this.id).subscribe(
      p=>{
          this.estimations=p.estimation;
          this.project = p.project;
          this.panelNumber = this.project.panel_number;
          this.center = {lat: this.project.lat,lng: this.project.lon};
          this.project.area.forEach(point => {
            this.area.push({lat:point.lat,lng:point.lon});
          this.estimations.estimated_actuals.forEach(e => {
            this.power7+=e.pv_estimate;
            this.data.push(e.pv_estimate);
            this.time.push(e.period_end);

            
          });
            
          });
          console.log(this.area);
          
        }
      ,err=>{console.log(err)}
    );
   
  }

}
