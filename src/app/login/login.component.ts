import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink,RouterLinkActive,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authService: AuthService, private routes: Router){

  }


  email = '';
  passwordReset = false;
onSubmit(form:NgForm) {

let email = form.value.email;
let password = form.value.password;

this.email = email;
this.authService.signIn(email,password).subscribe(resData => {

  if(email === 'admin123@gmail.com'){
    this.routes.navigate(['/admin-dashboard']);
  }
  else{
    this.routes.navigate(['/user-dashboard']);
  }
  console.log('LoggedIn SuccessFully :');
  console.log('Data : ',resData);


  
  
},error => {
  console.log(error);
})


}
emailForPasswordReset = '';

onForgotPassword(){

  console.log('Entered Email for Password Reset : ',this.emailForPasswordReset)
  this.authService.ForgotPassword(this.emailForPasswordReset).subscribe(
    res => {
      console.log('Password reset : ',res);
      this.passwordReset = true;
    }
  );

  
}

}
