import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  subscribeUser(user: any)
  {
    return this.http.post(this.apiUrl+'/user/register',user); 
  }

  login(user:any)
  {
    return this.http.post(this.apiUrl+'/user/auth',user);
  }
  
  userProfile() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })

    };
    return this.http.get<any>(this.apiUrl+'/user/userprofile', httpOptions);

  }

  isAdmin()
  {
    let token = localStorage.getItem('token');
    const decodedLogin = this.jwtHelper.decodeToken(token);
    if (token) {
      if (decodedLogin.role == "admin") {
        return true;
      }

    }
    return false
  }
  isLoggedUser() {
    let token = localStorage.getItem('token');
    const decodedLogin = this.jwtHelper.decodeToken(token);

    if (token) {
      
      if (decodedLogin.role === "user") {
        return true;
      }

    }
    return false
  }

  isloggedin(){
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

  resetPassword(email:any){
      return this.http.get<any>(this.apiUrl+'/user/reset/'+email); 
  }
  changePassword(password)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })

    };
    return this.http.post<any>(this.apiUrl+'/user/reset',password,httpOptions);
  }

  socialAuth(token)
  {
    return this.http.post<any>(this.apiUrl+'/user/googleauth',{'access_token':token});
  }


  
}
