import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
import {AuthService as auth}  from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup : FormGroup;
  constructor(private fb: FormBuilder, private service: auth, private route: Router,private socialAuthService: AuthService) { }

  ngOnInit(): void {
    this.loginFormGroup = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login()

  {
    let body=this.loginFormGroup.value;
    let user = {"email": body.email, "password": body.password};
    this.service.login(user).subscribe((res)=>{
      localStorage.setItem('token', res['token']);
      if(this.service.isLoggedUser())
      {
        this.route.navigate(['projects']);

      }
      if(this.service.isAdmin())
      {
        this.route.navigate(['admin']);
      }
    },(err)=>{
      console.log(err);
    });

  }

  /*public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } 
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        this.service.socialAuth(userData.token).subscribe(res => {
          localStorage.setItem('token',res['token']);
          if(this.service.isLoggedUser())
          {
            this.route.navigate(['projects']);
    
          }
          if(this.service.isAdmin())
          {
            this.route.navigate(['admin']);
          }
        });
            
      }
    );
  }*/
  
}


