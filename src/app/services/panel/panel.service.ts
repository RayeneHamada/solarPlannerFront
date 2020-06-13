import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PanelService {

  constructor(private http: HttpClient) { }

  subscribePanel(panel: any)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })

    };
    return this.http.post('http://127.0.0.1:1235/panel/new',panel,httpOptions);  

  }

  getAllPanels()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })

    };
       return this.http.get<any>('http://127.0.0.1:1235/panel/',httpOptions);
  }

  deletePanel(id)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })

    };
       return  this.http.delete<any>(`http://127.0.0.1:1235/panel/delete/${id}`,httpOptions);
      
  }

  globals()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })

    };
       return  this.http.get<any>(`http://127.0.0.1:1235/panel/globals`,httpOptions);
  }

  myPanels()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })

    };
       return  this.http.get<any>(`http://127.0.0.1:1235/panel/myPanels`,httpOptions);
  }
}
