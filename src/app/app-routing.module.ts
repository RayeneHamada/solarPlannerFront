import { LandingPageComponent } from './modules/visitor/landing-page/landing-page.component';
import { ProjectsListComponent } from './modules/projects-list/projects-list.component';
import { AddProjectComponent } from './modules/add-project/add-project.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { ViewProjectComponent } from './modules/view-project/view-project.component';
import { VisitorComponent } from './layouts/visitor/visitor.component';
import { RegisterComponent } from './modules/visitor/register/register.component';
import { LoginComponent } from './modules/visitor/login/login.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';


const routes: Routes = [
  {
    path: 'projects',
    component: DefaultComponent,
    canActivate: [AuthGuardGuard],
    children: [{
      path: '',
      component: DashboardComponent
    },
    {
      path:'add',
      component: AddProjectComponent
    },
    {
      path:'all',
      component: ProjectsListComponent
    },
    {
      path:':id',
      component: ViewProjectComponent
    },

  ]
  },
  {
    path: '',
    component: VisitorComponent,
    children: [
      {
        path:'registration',  
        component: RegisterComponent
      },
      {
        path:'login',  
        component: LoginComponent
      },
      {
        path:'',  
        component: LandingPageComponent
      }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
