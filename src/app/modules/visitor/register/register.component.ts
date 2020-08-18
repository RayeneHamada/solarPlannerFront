import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
import {AuthService as auth} from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationFormGroup : FormGroup;
  constructor(private fb: FormBuilder, private service: auth, private route: Router,private _snackBar: MatSnackBar,private socialAuthService: AuthService) { }

  ngOnInit(): void {
    this.registrationFormGroup = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  register()
  {
    let body=this.registrationFormGroup.value;
    let user = {"fullName": body.username, "email": body.email, "password": body.password};
    this.service.subscribeUser(user).subscribe((res)=>{
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
      this._snackBar.open(err.error,"close",{
        duration: 2000,
      });
    });
  }
  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
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
  }

}
