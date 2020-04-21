import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExternalService {

  numero ;

  constructor(private shared: SharedService,private http: HttpClient) {
   }

   getPanelsNumber(area: any[])
   {
      const res = this.http.post('http://127.0.0.1:1235/pv/getpower', {points: area});
      res.subscribe((data) => { this.numero = data['numberofpanels'];  });
      return this.numero;

   }
}
