import { Injectable } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';

@Injectable()
export class ValidateService {

	constructor(private flashMessage:FlashMessagesService) { }

	validateRegister(user){
		if(user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined){
			window.scrollTo(0, 0);
			this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
			return false;
		}else{
			return true;
		}
	}


	// Check for 2+ words for name
	validateName(user){
		if(user.name.length>50){
			window.scrollTo(0, 0);
			this.flashMessage.show('Name is limited to 50 characters', {cssClass: 'alert-warning', timeout: 3000});
			return false;
		}
		var values = user.name.split(' ').filter(function(v){return v!==''});
		if(values.length > 1){
			return true;
		}else{
			window.scrollTo(0, 0);
			this.flashMessage.show('Please enter your full name', {cssClass: 'alert-warning', timeout: 3000});
			return false;
		}
	}

	validateUsername(user){
		if(user.username.length<4){
			window.scrollTo(0, 0);
			this.flashMessage.show('Username is too short', {cssClass: 'alert-warning', timeout: 3000});
			return false;
		}else if(user.username.length>20){
			window.scrollTo(0, 0);
			this.flashMessage.show('Username is too long', {cssClass: 'alert-warning', timeout: 3000});
			return false;
		}else{
			return true;
		}
	}

	validateEmail(email){
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

	validatePassword(user){
		if(user.password.length<6){
			window.scrollTo(0, 0);
			this.flashMessage.show('Password is too short', {cssClass: 'alert-warning', timeout: 3000});
			return false;
		}else if(user.password.length>20){
			window.scrollTo(0, 0);
			this.flashMessage.show('Password is too long', {cssClass: 'alert-warning', timeout: 3000});
			return false;
		}else{
			return true;
		}
	}


}
