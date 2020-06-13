import { LandingPageComponent } from './../../modules/visitor/landing-page/landing-page.component';
import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorComponent } from './visitor.component';
import { RegisterComponent } from '../../modules/visitor/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { NotFoundComponent } from 'src/app/modules/errors/not-found/not-found.component';
import { ForgotPasswordComponent } from 'src/app/modules/visitor/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from 'src/app/modules/visitor/reset-password/reset-password.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from 'src/app/modules/visitor/login/login.component';





@NgModule({
  declarations: [
    VisitorComponent,
    RegisterComponent,
    LoginComponent,
    LandingPageComponent,
    NotFoundComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatIconModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCo6GxWjpimRcUeLYvQoLUDujtq_y4X4Ds' ,
      libraries: ['drawing']
    }),
    MatSnackBarModule
  ]
})
export class VisitorModule { }
