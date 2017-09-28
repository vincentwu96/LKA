import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
fullImagePath: string;

isIn = false;   // store state
toggleState() { // click handler
let bool = this.isIn;
this.isIn = !this.isIn;
}
	
	constructor(
	private authService:AuthService,
	private router:Router
	) { 
		this.fullImagePath = '/assets/images/bg.png'	
	}

  ngOnInit() {
  }

  onLogoutClick(){
  this.authService.logout();
  // User logged out
  this.router.navigate(['/login']);
  return false;
  }

}
