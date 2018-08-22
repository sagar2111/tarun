import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListitemComponent } from './item/listitem/listitem.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthguardService }  from './service/authguard.service';
import { RegisterComponent } from './register/index';

const appRoutes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'index', component: HomeComponent, canActivate: [AuthguardService],
    children: [
        
      { path: 'listitem', component: ListitemComponent, canActivate: [AuthguardService] },
      //{ path: '', redirectTo: '/login', pathMatch: 'full' },

      ] },

    // otherwise redirect to home
    { path: '**', redirectTo: '/login' }
];



export const routing = RouterModule.forRoot(appRoutes);
