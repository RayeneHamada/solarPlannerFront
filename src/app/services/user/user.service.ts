import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
   }


   getAllUsers()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })

    };
       return this.http.get<any>('http://127.0.0.1:1235/user/usersList',httpOptions);
  }
  deleteUser(id)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })

    };
       return  this.http.delete<any>('http://127.0.0.1:1235/user/delete/'+id,httpOptions);
      
  }
  changePassword(data)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })

    };
       return  this.http.put<any>('http://127.0.0.1:1235/user/updatePassword',{"oldPassword":data.old,"newPassword":data.new},httpOptions);
      
  }
}
