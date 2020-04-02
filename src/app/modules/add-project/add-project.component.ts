import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
import {ProjectService} from './../../services/project.service'
import {Router} from "@angular/router"

declare const google: any;

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  area: any[];
  stepone: boolean;

  
  center: any = {
    lat: 40.335652,
    lon: -3.877468
  };

  isLinear = true;

  projectFormGroup : FormGroup;
  panelFormGroup : FormGroup;


  constructor(private fb: FormBuilder, private service:ProjectService,private router: Router) {
    this.stepone = false;
  }

  ngOnInit() {

    
    this.projectFormGroup = this.fb.group({
      projectName: ['', Validators.required],
      tilt: ['', Validators.required],
      azimuth: ['180'],
      install_date: ['', Validators.required]

    });
    this.panelFormGroup = this.fb.group({
      panelWidth: ['', Validators.required],
      panelHeight: ['', Validators.required],
      panelCapacity: ['', Validators.required]

    });
  
  }

  
  onMapReady(map) {
    this.initDrawingManager(map);
  }

  initDrawingManager(map: any) {
    const options = {
      drawingControl: true,
      drawingControlOptions: {
        drawingModes: ['polygon']
      },
      polygonOptions: {
        draggable: true,
      },
      drawingMode: google.maps.drawing.OverlayType.POLYGON
    };
    const that = this;
    const drawingManager = new google.maps.drawing.DrawingManager(options);
    drawingManager.setMap(map);
    const points = [];
    drawingManager.addListener('polygoncomplete', (polygon) => {
      polygon.getPath().forEach((xy, i) =>   {

        points.push({ lat: xy.lat(), lon: xy.lng()});
      });
      that.stepone = true;
      that.area = points;
     
    });
    return false;
  }

  second()
  {
    if(this.projectFormGroup.value.projectName.trim() == '' && this.projectFormGroup.value.tilt.trim() == '')
    {
      return true;
    }
    return false;
  }

  third()
  {
    if(this.panelFormGroup.value.panelWidth.trim() == '' && this.panelFormGroup.value.panelHeight.trim() == ''&& this.panelFormGroup.value.panelCapacity.trim() == '')
    {
      return false;
    }
    return true;
  }


  onSubmit()
  {
    console.log(this.area);
    let body=this.projectFormGroup.value;
    let body1=this.panelFormGroup.value;
    let p={points:this.area, projectName:body.projectName,tilt: body.tilt,panelHeight:body1.panelHeight,panelWidth:body1.panelWidth, panelCapacity:body1.panelCapacity }
    this.service.subscribeProject(p).subscribe((res)=>{
      this.router.navigate(['projects', res['project']._id])
      console.log(res);
    },(err)=>{
      console.log(err);
    });
  }


}
