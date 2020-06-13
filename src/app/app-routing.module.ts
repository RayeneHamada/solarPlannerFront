import { ForgotPasswordComponent } from './modules/visitor/forgot-password/forgot-password.component';
import { LandingPageComponent } from './modules/visitor/landing-page/landing-page.component';
import { AddProjectComponent } from './modules/user/add-project/add-project.component';
import { DashboardComponent } from './modules/user/dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/user/default.component';
import { ViewProjectComponent } from './modules/user/view-project/view-project.component';
import { VisitorComponent } from './layouts/visitor/visitor.component';
import { RegisterComponent } from './modules/visitor/register/register.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { AdminComponent } from './layouts/admin/admin.component';
import { AdminGuard } from './guards/admin/admin.guard';
import { ProjectsListComponent } from './modules/admin/projects-list/projects-list.component';
import { UserProjectsComponent } from './modules/user/user-projects/user-projects.component';
import { UsersListComponent } from './modules/admin/users-list/users-list.component';
import { AdminDashboardComponent } from './modules/admin/admin-dashboard/admin-dashboard.component';
import { NotFoundComponent } from './modules/errors/not-found/not-found.component';
import { ResetPasswordComponent } from './modules/visitor/reset-password/reset-password.component';
import { LoginComponent } from './modules/visitor/login/login.component';
import { PanelsComponent } from './modules/admin/panels/panels.component';



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
      component: UserProjectsComponent
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
      },
      {
        path:'forgot_password',  
        component: ForgotPasswordComponent
      },
      {
        path:'reset_password/:id/:token',  
        component: ResetPasswordComponent
      }
  ]
  },
  {
    path:'admin',
    component: AdminComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'',
        component: AdminDashboardComponent
      },
      {
        path:'projects',
        component: ProjectsListComponent
      },
      {
        path:'users',
        component: UsersListComponent
      },
      {
        path:'panels',
        component: PanelsComponent
      }
    ]
  },
  {
    path:'**',
    component:NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
