import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

declare global {
  interface Window {
    grecaptcha: any;
  }
}
@Component({
  selector: 'app-login-2',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './login-2.component.html',
  styleUrl: './login-2.component.css'
})
export class Login2Component {

  // phoneNumber: string = '';
  // showSignupForm: boolean = false;
  // isRegistered: boolean = false;
  // isRegistering: boolean = false;
  // user = { name: '', age: '', email: '', address: '', pincode: '' };
  // otp: string = '';
  // sessionInfo: string = '';
  // grecaptcha:any;
  // constructor(private authService: AuthService) {}

  // onSubmit() {
  //   this.authService.checkIfUserExists(this.phoneNumber).subscribe(
  //     response => {
  //       this.isRegistering = true;
  //       this.sendOtp(); 
  //     },
  //     error => {
  //       this.showSignupForm = true; 
  //       this.isRegistering = true;
  //     }
  //   );
  // }

  // sendOtp() {

  //   const phone = '+91';
  //   this.getRecaptchaToken().then(recaptchaToken => {
  //     this.authService.sendOtpForLogin(phone+this.phoneNumber, recaptchaToken).subscribe(
  //       response => {
  //         this.sessionInfo = response.sessionInfo; // Store sessionInfo for OTP verification
  //         console.log('Phone number : ',phone+this.phoneNumber);
  //         alert('OTP sent to your phone number!');
  //       },
  //       error => {
  //         console.error('Error sending OTP:', error);
  //         console.log('Phone number : ',phone+this.phoneNumber, typeof(phone+this.phoneNumber));
  //       }
  //     );
  //   });
  // }

  // verifyOtp() {
  //   this.authService.verifyOtp(this.sessionInfo, this.otp).subscribe(
  //     response => {
  //       alert('Login successful!');
  //     },
  //     error => console.error('Error verifying OTP:', error)
  //   );
  // }

  // completeSignUp() {
  //   const userData = {
  //     name: { stringValue: this.user.name },
  //     age: { integerValue: this.user.age },
  //     email: { stringValue: this.user.email },
  //     address: { stringValue: this.user.address },
  //     pincode: { stringValue: this.user.pincode }
  //   };
  //   this.authService.createUserDocument(this.phoneNumber, userData).subscribe(
  //     response => alert('Sign up successful!'),
  //     error => console.error('Error creating user document:', error)
  //   );
  // }

 
  // getRecaptchaToken(): Promise<string> {
  //   return new Promise((resolve, reject) => {
  //     const grecaptcha = window.grecaptcha; // Properly typed now
  //     if (grecaptcha) {
  //       grecaptcha.ready(() => {
  //         grecaptcha.execute('6Lcuw38qAAAAADd2I6WlhP4157Thod5zjBjjpfOV', { action: 'submit' }).then(
  //           (token: string) => resolve(token),
  //           (error: any) => reject(error)
  //         );
  //       });
  //     } else {
  //       reject('reCAPTCHA library is not loaded.');
  //     }
  //   });
  // }
  
  
  }
