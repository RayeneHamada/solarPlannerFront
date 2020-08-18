import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl: string = environment.apiUrl;
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
    return this.http.post(this.apiUrl+'/project/new',projet,httpOptions);  

  }
  testProject(projet: any)
  {
   
    return this.http.post(this.apiUrl+'/project/test',projet);  

  }

  getAllProject()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })

    };
       return this.http.get<any>(this.apiUrl+'/project/',httpOptions);
  }

  deleteProject(id)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })

    };
       return  this.http.delete<any>(this.apiUrl+'/project/delete/'+id,httpOptions);
      
  }
  getprojectDetails(id)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })

    };
    return  this.http.get<any>(this.apiUrl+'/project/details/'+id,httpOptions);
  }
  getSunPath(id)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })

    };
    return  this.http.get<any>(this.apiUrl+'/project/sun_path/'+id,httpOptions);
  }

  getDashboard()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })

    };
       return this.http.get<any>(this.apiUrl+'/project/dashboard',httpOptions);
  }

  getAdminDashboard()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })

    };
       return this.http.get<any>(this.apiUrl+'/project/admin_dashboard',httpOptions);
  }

  adminGetAllProject()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })

    };
       return this.http.get<any>(this.apiUrl+'/project/admin',httpOptions);
  }

  adminDeleteProject(id)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })

    };
       return  this.http.delete<any>(this.apiUrl+'/project/admindelete/'+id,httpOptions);
      
  }

  getProjectsNumbers()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })

    };
       return this.http.get<any>(this.apiUrl+'/project/projects-number',httpOptions);
  }
  getConfig(projet: any)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })

    };
       return this.http.post<any>(this.apiUrl+'/project/config',projet,httpOptions);
  }

}
