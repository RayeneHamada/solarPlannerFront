import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup : FormGroup;
  constructor(private fb: FormBuilder, private service: AuthService, private route: Router) { }

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
      this.route.navigate(['projects']);
    },(err)=>{
      console.log(err);
    });

  }

}
