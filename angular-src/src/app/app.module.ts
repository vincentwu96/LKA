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

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { ContactComponent } from './components/contact/contact.component';
import { EnglishWritingComponent } from './components/english-writing/english-writing.component';
import { MathComponent } from './components/math/math.component';
import { EnrichmentComponent } from './components/enrichment/enrichment.component';
import { AfterComponent } from './components/after/after.component';
import { JoinComponent } from './components/join/join.component';
import {FlashMessagesModule} from 'angular2-flash-messages';

const appRoutes: Routes = [
	{path:'', component: HomeComponent},
	{path:'register', component: RegisterComponent},
	{path:'login', component: LoginComponent},
	{path:'contact', component: ContactComponent},
	{path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
	{path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
	{path:'after-school', component: AfterComponent},
	{path:'english-writing', component: EnglishWritingComponent},
	{path:'math', component: MathComponent},
	{path:'enrichment-programs', component: EnrichmentComponent},
	{path:'join', component: JoinComponent},
	{path:'**', redirectTo: ''},
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
    AfterComponent,
    MathComponent,
    EnrichmentComponent,
    JoinComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
