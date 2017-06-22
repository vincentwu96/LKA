import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';
import { ContactComponent } from './components/contact/contact.component';
import { ASCComponent } from './components/asc/asc.component';
import { EwComponent } from './components/ew/ew.component';
import { IopComponent } from './components/iop/iop.component';
import { ChessComponent } from './components/chess/chess.component';
import { ApComponent } from './components/ap/ap.component';


const appRoutes: Routes = [
	{path:'', component: HomeComponent},
	{path:'register', component: RegisterComponent},
	{path:'login', component: LoginComponent},
	{path:'contact', component: ContactComponent},
	{path:'asc', component: ASCComponent},
	{path:'ew', component: EwComponent},
	{path:'iop', component: IopComponent},
	{path:'chess', component: ChessComponent},
	{path:'ap', component: ApComponent},
	{path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
	{path:'profile', component: ProfileComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    ContactComponent,
    ASCComponent,
    EwComponent,
    IopComponent,
    ChessComponent,
    ApComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
