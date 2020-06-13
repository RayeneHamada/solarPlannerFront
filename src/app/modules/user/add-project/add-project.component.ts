import { PanelService } from './../../../services/panel/panel.service';
import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
import {ProjectService} from '../../../services/project/project.service'
import {Router} from "@angular/router"
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


declare const google: any;

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  area: any[];
  stepone: boolean = false;
  stepTwo: boolean = false;
  panels: any[];
  name;
  height;
  width;
  capacity;
  technology;
  nb_panels = 0;
  azimuth = 'south';
  tilt = 0;
  panel = null;
  
  center: any = {
    lat: 40.335652,
    lon: -3.877468
  };

  isLinear = true;

  projectFormGroup : FormGroup;
  panelFormGroup : FormGroup;
  configurationForlGroup : FormGroup;



  constructor(private fb: FormBuilder, private service:ProjectService,private panelService:PanelService,private router: Router,public dialog: MatDialog,private _snackBar: MatSnackBar) {
    this.stepone = false;
  }

  ngOnInit() {

    this.panelService.globals().subscribe(p=>{
      this.panels = p;
    })
    this.panelService.myPanels().subscribe(p => {
      this.panels = p;
    })
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
    this.configurationForlGroup = this.fb.group({
      azimuth:['',Validators.required],
      tilt:['',Validators.required],
      nb_panels:['',Validators.required]

    })
    
  
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

  choosePanel(panel)
  {
    this.panel = panel;
    this.stepTwo = true;
    return true;
  }


  third()
  {
    if(this.panelFormGroup.value.panelWidth.trim() == '' && this.panelFormGroup.value.panelHeight.trim() == ''&& this.panelFormGroup.value.panelCapacity.trim() == '')
    {
      return false;
    }
    return true;
  }

  getConfig()
  {
    this.service.getConfig().subscribe(c => {
      this.tilt = c.tilt;
      this.azimuth = c.direction;
      this.nb_panels = c.panel_number
    })
  }
  newPanel(){
    const dialogRef = this.dialog.open(CreatePanelDialog, {
      width: '250px',
      data: {name: this.name, height: this.height,width:this.width,capacity:this.capacity,technology:this.technology}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result && result.capacity && result.height && result.width && result.technology && result.technology)
      {
        console.log(result);
        if(!isNaN(result.height) && !isNaN(result.width) && !isNaN(result.capacity))
        {
          this.panelService.subscribePanel({'name':result.name,'width':result.width,'height':result.height,'capacity':result.capacity,'technology':result.technology,'type':'personal'}).subscribe(
            
            err =>{console.log('errpr subscribing the panel');},
            p => {
              this.panelService.globals().subscribe(p =>{
                this.panels = p;
              })
              this.panelService.myPanels().subscribe(p =>{
                this.panels = p;
              })
            }
          )
        }
        else{
          this._snackBar.open("some fields must be numbers","close",{
            duration: 5000,
          });
        }
      }
      
      else{
        this._snackBar.open("Missing fields","close",{
          duration: 5000,
        });
      }
      
    });
  }


  onSubmit()
  {
    console.log(this.area);
    let body=this.projectFormGroup.value;
    let body1=this.panelFormGroup.value;
    let p={points:this.area, projectName:body.projectName,tilt: body.tilt,panelHeight:body1.panelHeight,panelWidth:body1.panelWidth, panelCapacity:body1.panelCapacity }
    this.service.subscribeProject(p).subscribe((res)=>{
      this.router.navigate(['projects', res['_id']])
      console.log(res);
    },(err)=>{
      console.log(err);
    });
  }


}

@Component({
  selector: 'add-panel-dialog',
  templateUrl: 'add-panel-dialog.html',
})
export class CreatePanelDialog {

  Monocrystalline='Monocrystalline'
  Polycrystalline='Polycrystalline'
  Thin_film='Thin film'

  constructor(
    public dialogRef: MatDialogRef<CreatePanelDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

    onNoClick(): void {
    this.dialogRef.close(this.data);
  }

}
