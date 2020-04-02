import { SharedModule } from './shared/shared.module';
import { DefaultModule } from './layouts/default/default.module';
import { VisitorModule } from './layouts/visitor/visitor.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedService } from './services/shared.service';
import { ProjectService } from './services/project.service';
import { AuthService } from './services/auth.service';
import {AuthGuardGuard} from './guards/auth-guard.guard'
import { JwtModule } from "@auth0/angular-jwt";
import { HttpClientModule } from "@angular/common/http";

export function tokenGetter() {
  return localStorage.getItem("token");
}


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
    VisitorModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["example.com"],
        blacklistedRoutes: ["example.com/examplebadroute/"]
      }
    })
  ],
  providers: [
    SharedService,
    ProjectService,
    AuthService,
    AuthGuardGuard
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
