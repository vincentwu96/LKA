import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service'
import {Router} from '@angular/router';

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
private router: Router
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
alert('Please fill in all fields');
return false;
}


// Validate Email
if(!this.validateService.validateEmail(user.email)){
alert('Please use a valid email');
return false;
}

// Validate Password
if(!this.validateService.validatePassword(user)){
return false;
}

// Validate Username
if(!this.validateService.validateUsername(user)){
return false;
}

// Register user
this.authService.registerUser(user).subscribe(data => {
if(data.success){
// User Registered
alert('You are now registered');
this.router.navigate(['/login']);
window.scrollTo(0, 0);
}else{
alert('Something went wrong');
this.router.navigate(['/register']);
}
});

}

}
