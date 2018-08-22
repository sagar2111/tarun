import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Observable} from 'rxjs/Rx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './_directives/index';
import { AlertService, AuthenticationService, UserService } from './service/index';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { ListitemComponent } from './item/listitem/listitem.component';
import { DetailitemComponent } from './item/detailitem/detailitem.component';
import { LoginComponent } from './login/login.component';
import { AutofocusDirective} from './directive/autofocus.directive';
import { AuthguardService } from './service/authguard.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/index';
@NgModule({
  declarations: [
    AppComponent,
    ListitemComponent,
    DetailitemComponent,
    LoginComponent,
    AlertComponent,
    AutofocusDirective,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule ,
    routing
  ],
  providers: [
    AuthguardService,
       AlertService,
        AuthenticationService,
        UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
