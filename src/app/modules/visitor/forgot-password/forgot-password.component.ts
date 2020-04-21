import { AuthService } from './../../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: AuthService, private route: Router) { }

  resetFormGroup : FormGroup;

  ngOnInit(): void {
    this.resetFormGroup = this.fb.group({
      email: ['', Validators.required],
    });
  }

  reset(){
    let email =this.resetFormGroup.value.email;
    this.service.resetPassword(email).subscribe((res) => {
      if(res.status == 'success')
      {
        console.log('check your email');
      }
    })
  }

}
