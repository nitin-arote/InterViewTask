
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from './login/login.component';

import { AppGlobals } from './app.globals'
import { AuthService } from './_helpers/auth.service'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { AdminPortalModule } from './admin-portal/admin-portal.module'
// import { CustomerPortalModule } from './customer-portal/customer-portal.module';
// import { SharedModule } from "./shared/shared.module";
import { FormsModule }   from '@angular/forms';
import { SchoolResourceComponent } from './school-resource/school-resource.component';
import { StudentResourceComponent } from './student-resource/student-resource.component';
import { AlertOnRightComponent } from './alert-on-right/alert-on-right.component';
// import { HttpCancelService} from './shared/interceptors/cancelHttpRequest/http-cancel.service';
// import { ManageHttpInterceptor } from "./shared/interceptors/cancelHttpRequest/managehttp.interceptor";
// import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SchoolResourceComponent,
    StudentResourceComponent,
    AlertOnRightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    ReactiveFormsModule,
    // AdminPortalModule,
    // CustomerPortalModule,
    // SharedModule,
    FormsModule,
    // ChartsModule
  ],
  providers: [AppGlobals, {
    provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true
  },
  // {
  //   provide: HTTP_INTERCEPTORS, useClass: ManageHttpInterceptor, multi: true 
  // }
],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
