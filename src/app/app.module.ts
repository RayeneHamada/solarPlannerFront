import { SharedModule } from './shared/shared.module';
import { DefaultModule } from './layouts/user/default.module';
import { VisitorModule } from './layouts/visitor/visitor.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedService } from './services/shared.service';
import { ProjectService } from './services/project/project.service';
import { AuthService } from './services/auth/auth.service';
import {AuthGuardGuard} from './guards/auth-guard.guard'
import { JwtModule } from "@auth0/angular-jwt";
import { HttpClientModule } from "@angular/common/http";
import { FileService } from './services/file/file.service';
import { UserService } from './services/user/user.service';
import {PanelService} from './services/panel/panel.service'

import { AdminModule } from './layouts/admin/admin.module';
import {AdminGuard} from './guards/admin/admin.guard';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider
} from "angular-6-social-login";


// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [

        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("225229836646-8tor2vbkoqpv12l7r5dnpvbqi67prgbo.apps.googleusercontent.com")
        }

        
      ]
  );
  return config;
}



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
    AdminModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["example.com"],
        blacklistedRoutes: ["example.com/examplebadroute/"]
      }
    }),
    SocialLoginModule
  ],
  providers: [
    SharedService,
    ProjectService,
    AuthService,
    AuthGuardGuard,
    FileService,
    AdminGuard,
    UserService,
    PanelService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
