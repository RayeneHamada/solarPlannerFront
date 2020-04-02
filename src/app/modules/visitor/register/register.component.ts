import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationFormGroup : FormGroup;
  constructor(private fb: FormBuilder, private service: AuthService) { }

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
      console.log(res);
    },(err)=>{
      console.log(err);
    });
  }

}
