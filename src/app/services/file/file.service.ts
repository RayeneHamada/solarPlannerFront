import { Injectable } from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Http,ResponseContentType } from '@angular/http';
import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class FileService {

  private apiUrl: string = environment.apiUrl;
  constructor(private http: Http) { }
  downloadFile(id): Observable<any>{
    return this.http.get(this.apiUrl+'/project/plan/'+id, {responseType: ResponseContentType.Blob});
  }
  
}

