import { Injectable } from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Http,ResponseContentType } from '@angular/http';



@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: Http) { }
  downloadFile(id): Observable<any>{
    return this.http.get('http://127.0.0.1:1235/project/plan/'+id, {responseType: ResponseContentType.Blob});
  }
  
}

