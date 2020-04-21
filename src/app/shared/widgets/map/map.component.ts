import { environment } from './../../../../environments/environment';
import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from 'src/app/services/shared.service';

declare const google: any;

@Component({
  selector: 'app-widget-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input('area') area ?:any;
  @Input('center') center ?:any;
  @Input('markers') markers ?:any;


  constructor(private http: HttpClient) {
   }
   
    strokeColor='black';
    visible=true;
    zoom = 16;
    defaultzoom=2;
    defaultcenter = {lat: 0,long: 0};
   marker_icon = environment.marker_icon;
    map_type = "terrain";

  ngOnInit(): void {
   
}
  onMapReady(map) {
  }

 
      //const res = that.http.post('http://127.0.0.1:1235/pv/getpower', {points: points});
      //res.subscribe((data) => { that.numero = data['numberofpanels']; /*that.service.changeMessage(that.numero); */ });


}
