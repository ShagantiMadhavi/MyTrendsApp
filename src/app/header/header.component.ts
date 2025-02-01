import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgIf } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  isInprofilePage = false;
  isAuthenticated = false;
  isAdmin = false;
  isUser = false;
  private userSub :Subscription | undefined; 
  userpassword = '';
  userEmailId: string | undefined;

  constructor(private authService:AuthService, private routes:Router){
  }

 
  ngOnInit() {
      
   this.userSub = this.authService.user.subscribe(user => {
        this.isAuthenticated = user?true:false;

        if(this.isAuthenticated && user?.email==='admin123@gmail.com'){
          this.isAdmin = true;
          this.userEmailId = user?.email;
          this.isUser = false;
         
        }
        else{
          this.isAdmin = false;
          this.isUser = true;
          this.userEmailId = user?.email; 
        }

        console.log('LoggedIn Email Id : ',this.userEmailId)
    })
  }

  onProfile(){
    this.isInprofilePage = true;
    this.routes.navigate(['/login']);
  }

  
  onLogout(){
    this.authService.Logout();
    this.routes.navigate(['/home']);

  }



}
