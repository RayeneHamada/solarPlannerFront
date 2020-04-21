import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MapComponent } from './widgets/map/map.component';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { SplineComponent } from './widgets/spline/spline.component';
import { HighchartsChartModule } from 'highcharts-angular';
import {MatTreeModule} from '@angular/material/tree';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { ColumnComponent } from './widgets/column/column.component';
import { MultiaxesComponent } from './widgets/multiaxes/multiaxes.component';




@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MapComponent,
    SplineComponent,
    ColumnComponent,
    MultiaxesComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCo6GxWjpimRcUeLYvQoLUDujtq_y4X4Ds' ,
      libraries: ['drawing']
    }),
    HttpClientModule,
    HighchartsChartModule,
    MatTreeModule,
    AgmJsMarkerClustererModule
  ],
  providers: [
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MapComponent,
    SplineComponent,
    ColumnComponent,
    MultiaxesComponent
  ]
})
export class SharedModule { }
