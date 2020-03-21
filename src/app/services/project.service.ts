import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { 

  }
  subscribeProject(projet: any)
  {
    return this.http.post('http://127.0.0.1:1235/project/new',projet);  

  }

  getAllProject()
  {
       return this.http.get<any>('http://127.0.0.1:1235/project/');
  }

  deleteProject(id)
  {
       return  this.http.delete<any>('http://127.0.0.1:1235/project/delete/'+id);
      
  }
  getprojectDetails(id)
  {
    return  this.http.get<any>('http://127.0.0.1:1235/project/details/'+id);
  }
  getDashboard()
  {
       return this.http.get<any>('http://127.0.0.1:1235/project/dashboard');
  }

}
