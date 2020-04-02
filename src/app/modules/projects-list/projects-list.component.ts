import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { NgxSpinnerService } from "ngx-spinner";
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  projects = [];
  constructor(private service: ProjectService,private spinner: NgxSpinnerService,private _snackBar: MatSnackBar) {

   }

  ngOnInit(): void {
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);

    this.service.getAllProject().subscribe(
      p=>{this.projects=p;
        }
      ,err=>{console.log(err)}
    );
  }

  deleteProject(project){

    let index = this.projects.indexOf(project);
    this.service.deleteProject(project._id).subscribe((res)=>{
      this.projects.splice(index,1);
      this._snackBar.open(project.name+" has been deleted successfuly","close",{
        duration: 5000,
      });
  },(err)=>{
    console.log(err);
  }); 
  }



}
