import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { RouterLink, RouterLinkActive } from '@angular/router';



@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule,NgIf],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {



  constructor(private authService:AuthService){

  }


  onSubmit(form:NgForm) {

  //  let firstName = form.value.firstName;
  //  let lastName = form.value.lastName;
   let email:string = form.value.email;
   let password:string = form.value.password;
  //  let phone = form.value.phone;
  //  let city = form.value.city;
  //  let state = form.value.state;
  //  let zipcode = form.value.zipcode;

   console.log('email : ',email,' , password :',password)
  
      this.authService.signUp(email,password).subscribe(resdata => {
        console.log('Registration Success : ');
        console.log('Entered Data : ', resdata);
        
      },error => {
        console.log(error.message,error)
      }
    
    )
    form.reset();
}



}
