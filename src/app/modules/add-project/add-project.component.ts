import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
import {ProjectService} from './../../services/project.service'

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
    lat: 40.3354564,
    lon: -3.8801015
  };

  isLinear = true;

  projectFormGroup : FormGroup;

  constructor(private fb: FormBuilder, private service:ProjectService) {
    this.stepone = false;
  }

  ngOnInit() {

    
    this.projectFormGroup = this.fb.group({
      projectName: ['', Validators.required],
      panelWidth: ['', Validators.required],
      panelHeight: ['', Validators.required],
      panelCapacity: ['', Validators.required],
      tilt: ['', Validators.required],
      azimuth: ['180'],
      install_date: ['', Validators.required]

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
    if(this.projectFormGroup.value.panelWidth.trim() == '' && this.projectFormGroup.value.panelHeight.trim() == ''&& this.projectFormGroup.value.panelCapacity.trim() == '')
    {
      return true;
    }
    return false;
  }


  onSubmit()
  {
    console.log("nhebek barsha");
    console.log(this.area);
    let body=this.projectFormGroup.value;
    let p={points:this.area, projectName:body.projectName,tilt: body.tilt,panelHeight:body.panelHeight,panelWidth:body.panelWidth, panelCapacity:body.panelCapacity }
    this.service.subscribeProject(p).subscribe((res)=>{
      console.log(res);
    },(err)=>{
      console.log(err);
    });
  }


}
