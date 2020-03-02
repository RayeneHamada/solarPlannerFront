import { SolarfarmService } from './../../../services/solarfarm.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const google: any;

@Component({
  selector: 'app-widget-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  constructor(private http: HttpClient, private service: SolarfarmService) {
   }
  numero: any[];


  center: any = {
    lat: 33.5362475,
    lng: -111.9267386
  };

  ngOnInit(): void {
    this.service.currentMessage.subscribe(message =>  this.numero = message['numberofpanels'] );
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
        console.log(points);
      });
      const res = that.http.post('http://127.0.0.1:1235/pv/getpower', {points: points});
      res.subscribe((data) => { that.numero = data['numberofpanels']; that.service.changeMessage(data);  });

    })}

}
