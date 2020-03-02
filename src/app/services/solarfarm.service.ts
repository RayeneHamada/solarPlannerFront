import { Injectable } from '@angular/core';
import { Observable,Subject, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SolarfarmService {

  private messageSource = new BehaviorSubject<any[]>([]);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: []) {
    this.messageSource.next(message);
  }



}
