import { ProjectsListComponent, DeleteProjectConfirmationDialog } from './../../modules/admin/projects-list/projects-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HighchartsChartModule } from 'highcharts-angular';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import { NgxSpinnerModule } from "ngx-spinner";
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent } from './admin.component';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { UsersListComponent, DeleteUserConfirmationDialog } from 'src/app/modules/admin/users-list/users-list.component';
import { AdminDashboardComponent } from 'src/app/modules/admin/admin-dashboard/admin-dashboard.component';
import {MatDialogModule} from '@angular/material/dialog';
import {PanelsComponent, NewPanelDialog, DeletePanelConfirmationDialog} from '../../modules/admin/panels/panels.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminComponent,
    ProjectsListComponent,
    UsersListComponent,
    PanelsComponent,
    DeleteProjectConfirmationDialog,
    DeleteUserConfirmationDialog,
    NewPanelDialog,
    DeletePanelConfirmationDialog
  ],
  entryComponents: [
    DeleteProjectConfirmationDialog,
    DeleteUserConfirmationDialog,
    NewPanelDialog,
    DeletePanelConfirmationDialog],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatDividerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCo6GxWjpimRcUeLYvQoLUDujtq_y4X4Ds' ,
      libraries: ['drawing']
    }),
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    HighchartsChartModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    NgxSpinnerModule,
    MatIconModule,
    MatSnackBarModule,
    MatTabsModule,
    HttpModule,
    BrowserModule,
    MatButtonModule,
    SharedModule,
    RouterModule,
    MatDialogModule,
    FormsModule,
    MatSelectModule
  ]
})
export class AdminModule { }
