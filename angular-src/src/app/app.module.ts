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
import { EnglishWritingComponent } from './components/english-writing/english-writing.component';
import { ChessComponent } from './components/chess/chess.component';
import { AfterSchoolCareComponent } from './components/after-school-care/after-school-care.component';
import { IntroToProgrammingComponent } from './components/intro-to-programming/intro-to-programming.component';
import { ApTutoringComponent } from './components/ap-tutoring/ap-tutoring.component';

const appRoutes: Routes = [
	{path:'', component: HomeComponent},
	{path:'register', component: RegisterComponent},
	{path:'login', component: LoginComponent},
	{path:'contact', component: ContactComponent},
	
	{path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
	{path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
	{path:'after-school-care', component: AfterSchoolCareComponent},
	{path:'english-writing', component: EnglishWritingComponent},
	{path:'intro-to-programming', component: IntroToProgrammingComponent},
	{path:'chess', component: ChessComponent},
	{path:'ap-tutoring', component: ApTutoringComponent},
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
    EnglishWritingComponent,
    ChessComponent,
    AfterSchoolCareComponent,
    IntroToProgrammingComponent,
    ApTutoringComponent
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
