import { ProjectsListComponent } from './modules/projects-list/projects-list.component';
import { AddProjectComponent } from './modules/add-project/add-project.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { ViewProjectComponent } from './modules/view-project/view-project.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [{
      path: '',
      component: DashboardComponent
    },
    {
      path:'project/add',
      component: AddProjectComponent
    },
    {
      path:'projects',
      component: ProjectsListComponent
    },
    {
      path:'project/:id',
      component: ViewProjectComponent
    },

  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
