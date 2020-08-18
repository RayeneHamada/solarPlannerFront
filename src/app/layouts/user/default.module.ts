import { AddProjectComponent, CreatePanelDialog } from '../../modules/user/add-project/add-project.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatStepperModule} from '@angular/material/stepper'
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../../modules/user/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import {  MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HighchartsChartModule } from 'highcharts-angular';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import { ViewProjectComponent } from 'src/app/modules/user/view-project/view-project.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { MatIconModule } from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpModule } from '@angular/http';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { BrowserModule } from '@angular/platform-browser';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { UserProjectsComponent, ConfirmationDialog } from 'src/app/modules/user/user-projects/user-projects.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { PanelListComponent, NewPanelDialog } from 'src/app/modules/user/panels/panel-list/panel-list.component';





@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    AddProjectComponent,
    ViewProjectComponent,
    UserProjectsComponent,
    ConfirmationDialog,
    CreatePanelDialog,
    PanelListComponent,
    NewPanelDialog

  ],
  entryComponents: [
    ConfirmationDialog,
    CreatePanelDialog,
    NewPanelDialog
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
    DragDropModule,
    NgxSpinnerModule,
    MatIconModule,
    MatSnackBarModule,
    MatTabsModule,
    HttpModule,
    BrowserModule, 
    PdfViewerModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    MatChipsModule,
    MatSlideToggleModule
    

  ]
})
export class DefaultModule { }
