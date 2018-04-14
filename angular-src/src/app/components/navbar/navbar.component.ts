import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
selector: 'app-navbar',
templateUrl: './navbar.component.html',
styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
fullImagePath: string;

isIn = false;   // store state
toggleState() { // click handler
let bool = this.isIn;
this.isIn = !this.isIn;
}

constructor(
private authService:AuthService,
private router:Router,
private flashMessage:FlashMessagesService
) { 
this.fullImagePath = '/assets/images/LKA.png'
}

ngOnInit() {
}

onLogoutClick(){
this.authService.logout();
// User logged out
this.router.navigate(['/login']);
window.scrollTo(0, 0);
this.flashMessage.show('You are now logged out', {cssClass: 'alert-success', timeout: 10000});
return false;
}
}
