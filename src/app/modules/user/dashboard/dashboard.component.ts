import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project/project.service';
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
  nb_visits
  loaded = false;
  constructor(private service: ProjectService,private spinner: NgxSpinnerService,private _snackBar: MatSnackBar) {
  }


  ngOnInit(): void {
    if(!sessionStorage.getItem('nb_visits'))
    {
      
      sessionStorage.setItem('nb_visits','1');
      setTimeout(() => {
        this._snackBar.open("Welcome to dashboard","close",{
          duration: 2000,
        });
    
      }, 5000);
    }
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);
   
    
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
      ,err=>{console.log("front err"+err)}
    );
  }
}


