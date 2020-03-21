import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { NgxSpinnerService } from "ngx-spinner";
import {MatSnackBar} from '@angular/material/snack-bar';

declare const google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  projects = [];
  markers = [];
  loaded = false;
  constructor(private service: ProjectService,private spinner: NgxSpinnerService,private _snackBar: MatSnackBar) {
  }


  ngOnInit(): void {
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);
    setTimeout(() => {
      this._snackBar.open("Welcome to dashboard","false",{
        duration: 2000,
      });
  
    }, 5000);
    
    this.service.getDashboard().subscribe(
      p=>{p.forEach(p => {
        this.markers.push(
          {
            lat: p.lat,
            lng: p.lon,
            label: p.name,
            id: p._id,
            numberOfPanels:p.panel_number,
            surface:p.surface,
            draggable:false
          }
        )
      });
        }
      ,err=>{console.log(err)}
    );
  }
}


