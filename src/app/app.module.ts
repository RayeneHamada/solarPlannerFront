import { SharedModule } from './shared/shared.module';
import { DefaultModule } from './layouts/default/default.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedService } from './services/shared.service';
import { ProjectService } from './services/project.service';




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    SharedModule,
  ],
  providers: [
    SharedService,
    ProjectService,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
