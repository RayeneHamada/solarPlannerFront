import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private area = new BehaviorSubject<any[]>([]);
          currentArea = this.area.asObservable();
  private number = new BehaviorSubject("0");
  currentnumber = this.number.asObservable();
  constructor(private http: HttpClient) {
   }

  changeArea(a: any[]){
  this.area.next(a);
  const res = this.http.post('http://127.0.0.1:1235/project/new', {points: a});
  res.subscribe((data) => { this.number.next(data['project'].panels); console.log(this.number);  });
    
  }
  
}
