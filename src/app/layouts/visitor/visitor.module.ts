import { LandingPageComponent } from './../../modules/visitor/landing-page/landing-page.component';
import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorComponent } from './visitor.component';
import { RegisterComponent } from '../../modules/visitor/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../../modules/visitor/login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';





@NgModule({
  declarations: [
    VisitorComponent,
    RegisterComponent,
    LoginComponent,
    LandingPageComponent
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
    
  ]
})
export class VisitorModule { }
