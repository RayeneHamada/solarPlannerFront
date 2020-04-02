import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  subscribeUser(user: any)
  {
    return this.http.post('http://127.0.0.1:1235/user/register',user); 
  }

  login(user:any)
  {
    return this.http.post('http://127.0.0.1:1235/user/auth',user);
  }
  
  userProfile() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })

    };
    return this.http.get<any>('http://127.0.0.1:1235/user/userprofile', httpOptions);

  }

  isloggedin(){
    /*const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })

    };
    let res =  this.http.get<any>('http://127.0.0.1:1235/user/userprofile', httpOptions);
    if(res['user'].fullName)
    {
      return true;
    }
    return false;*/

    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return this.jwtHelper.isTokenExpired(token);
 

  }


  
}
