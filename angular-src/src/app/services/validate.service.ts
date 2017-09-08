import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

constructor() { }

validateRegister(user){
if(user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined){
alert('Please fill in all fields');
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
alert('Password is too short');
return false;
}else if(user.password.length>20){
alert('Password is too long');
return false;
}else{
return true;
}
}

validateUsername(user){
if(user.username.length<4){
alert('Username is too short');
return false;
}else if(user.username.length>20){
alert('Username is too long');
return false;
}else{
return true;
}
}


}
