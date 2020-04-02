import { ProjectsListComponent } from './../../modules/projects-list/projects-list.component';
import { AddProjectComponent } from './../../modules/add-project/add-project.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatStepperModule} from '@angular/material/stepper'
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './../../modules/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import {  MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HighchartsChartModule } from 'highcharts-angular';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import { ViewProjectComponent } from 'src/app/modules/view-project/view-project.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { MatIconModule } from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    AddProjectComponent,
    ProjectsListComponent,
    ViewProjectComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCo6GxWjpimRcUeLYvQoLUDujtq_y4X4Ds' ,
      libraries: ['drawing']
    }),
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    MatStepperModule,
    HighchartsChartModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    NgxSpinnerModule,
    MatIconModule,
    MatSnackBarModule,
    

  ]
})
export class DefaultModule { }
