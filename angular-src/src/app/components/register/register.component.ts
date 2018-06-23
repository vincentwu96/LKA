import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service'
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
selector: 'app-register',
templateUrl: './register.component.html',
styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	name: String;
	username: String;
	email: String;
	password: String;

	constructor(
		private validateService: ValidateService,
		private authService: AuthService,
		private router: Router,
		private flashMessage:FlashMessagesService
	) { }

	ngOnInit() {
	}

	onRegisterSubmit(){
		const user = {
			name: this.name,
			email: this.email,
			username: this.username,
			password: this.password
		}

		// Required Fields
		if(!this.validateService.validateRegister(user)){
			return false;
		}

		// Validate Name
		if(!this.validateService.validateName(user)){
			return false;
		}

		// Validate Username
		if(!this.validateService.validateUsername(user)){
			return false;
		}

		// Validate Email
		if(!this.validateService.validateEmail(user.email)){
			window.scrollTo(0, 0);
			this.flashMessage.show('Please use a valid email', {cssClass: 'alert-warning', timeout: 3000});
			return false;
		}

		// Validate Password
		if(!this.validateService.validatePassword(user)){
			return false;
		}

		// Register user
		this.authService.registerUser(user).subscribe(data => {
			if(data.success){
				// User Registered
				this.flashMessage.show('You are now registered', {cssClass: 'alert-success', timeout: 3000});
				this.router.navigate(['/login']);
				window.scrollTo(0, 0);
			}else{
				window.scrollTo(0, 0);
				this.flashMessage.show('Username is already taken', {cssClass: 'alert-warning', timeout: 3000});
				this.router.navigate(['/register']);
			}
		});

	}

}
