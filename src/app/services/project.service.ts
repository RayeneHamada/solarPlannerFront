import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { 

  }
  subscribeProject(projet: any)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })

    };
    return this.http.post('http://127.0.0.1:1235/project/new',projet,httpOptions);  

  }
  testProject(projet: any)
  {
   
    return this.http.post('http://127.0.0.1:1235/project/test',projet);  

  }

  getAllProject()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })

    };
       return this.http.get<any>('http://127.0.0.1:1235/project/',httpOptions);
  }

  deleteProject(id)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })

    };
       return  this.http.delete<any>('http://127.0.0.1:1235/project/delete/'+id,httpOptions);
      
  }
  getprojectDetails(id)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })

    };
    return  this.http.get<any>('http://127.0.0.1:1235/project/details/'+id,httpOptions);
  }
  getDashboard()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })

    };
       return this.http.get<any>('http://127.0.0.1:1235/project/dashboard',httpOptions);
  }

}
