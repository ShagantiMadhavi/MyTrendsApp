import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // constructor(private http: HttpClient) { }
  // user = new BehaviorSubject<UserModel | null>(null);
  // signUp(email: string, password: string){
  //  return  this.http.post<{idToken:string,email:string,refreshToken:string,expiresIn:string,localId:string}>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBxXCf-JV3vjf5oAurd2c_iX4VzmefGG6c',
  //     {
  //       email:email,
  //       password: password,
  //       returnSecureToken: true 
       
  //     }
      
  //   ).pipe(
      
  //     tap(resData => {
  //       const expirationDate = new Date(
  //         new Date().getTime() + +resData.expiresIn * 1000
  //       );
  //       const user = new UserModel(
  //         resData.email,
  //         resData.localId,
  //         resData.idToken,
  //         expirationDate
  //       );
  //       this.user.next(user);  
  //     })
  //   )
  // }

  // signIn(email:string, password: string){
  //   return this.http.post<{idToken:string,email:string,refreshToken:string,expiresIn:string,localId:string,registerd:boolean}>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBxXCf-JV3vjf5oAurd2c_iX4VzmefGG6c',
  //     {
  //       email:email,
  //       password: password,
  //       returnSecureToken: true
  //     }
  //   ).pipe(
  //     tap(resData => {
  //       const expirationDate = new Date(
  //         new Date().getTime() + +resData.expiresIn * 1000
  //       );
  //       const user = new UserModel(
  //         resData.email,
  //         resData.localId,
  //         resData.idToken,
  //         expirationDate
  //       );
  //       this.user.next(user);  
  //       // this.userEmail = user.email;

  //     })
  //   )
  //   console.log('Service c : ',this.user.value?.email);
    
  // }

  // Logout(){
  //   this.user.next(null);
  // }

  ForgotPassword(email:string){

    return this.http.post<{email:string}>('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBxXCf-JV3vjf5oAurd2c_iX4VzmefGG6c',
      { 
        requestType:'PASSWORD_RESET',
        email:email
      }
    )
  }




  // // login-2 component using mobile number


  // private apiKey = 'AIzaSyBxXCf-JV3vjf5oAurd2c_iX4VzmefGG6c';
  // private projectId = 'myntra-auth-b9d63';
  // private firestoreUrl = `https://firestore.googleapis.com/v1/projects/${this.projectId}/databases/(default)/documents`;

  
  // checkIfUserExists(phoneNumber: string): Observable<any> {
  //   return this.http.get(`${this.firestoreUrl}/users/${phoneNumber}`);
  // }

  // createUserDocument(phoneNumber: string, userData: any): Observable<any> {
  //   const docPath = `${this.firestoreUrl}/users/${phoneNumber}`;
  //   return this.http.patch(docPath, { fields: userData });
  // }

  // // Sends OTP to the phone number
  // sendOtpForLogin(phoneNumber: string, recaptchaToken: string): Observable<any> {
  //   return this.http.post(
  //     `https://identitytoolkit.googleapis.com/v1/accounts:sendVerificationCode?key=${this.apiKey}`,
  //     {
  //       phoneNumber,
  //       recaptchaToken
  //     }
  //   );
  // }

  // // Verifies the OTP entered by the user
  // verifyOtp(sessionInfo: string, otp: string): Observable<any> {
  //   return this.http.post(
  //     `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPhoneNumber?key=${this.apiKey}`,
  //     {
  //       sessionInfo,
  //       code: otp
  //     }
  //   );
  // }

 



  user = new BehaviorSubject<UserModel | null>(null);

  constructor(private http: HttpClient) {}

  private saveUserToLocalStorage(user: UserModel) {
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private removeUserFromLocalStorage() {
    localStorage.removeItem('userData');
  }

  private getUserFromLocalStorage(): UserModel | null {
    const userData = localStorage.getItem('userData');
    if (!userData) {
      return null;
    }
    const parsedData = JSON.parse(userData);
    return new UserModel(
      parsedData.email,
      parsedData.id,
      parsedData._token,
      new Date(parsedData._tokenExpirationDate)
    );
  }

  autoLogin() {
    const user = this.getUserFromLocalStorage();
    if (user && user.token) {
      this.user.next(user);
    }
  }

  signUp(email: string, password: string) {
    return this.http
      .post<{ idToken: string; email: string; refreshToken: string; expiresIn: string; localId: string }>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBxXCf-JV3vjf5oAurd2c_iX4VzmefGG6c',
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
      .pipe(
        tap(resData => {
          const expirationDate = new Date(new Date().getTime() + +resData.expiresIn * 1000);
          const user = new UserModel(resData.email, resData.localId, resData.idToken, expirationDate);
          this.user.next(user);
          this.saveUserToLocalStorage(user);
        })
      );
  }

  signIn(email: string, password: string) {
    return this.http
      .post<{ idToken: string; email: string; refreshToken: string; expiresIn: string; localId: string; registered: boolean }>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBxXCf-JV3vjf5oAurd2c_iX4VzmefGG6c',
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
      .pipe(
        tap(resData => {
          const expirationDate = new Date(new Date().getTime() + +resData.expiresIn * 1000);
          const user = new UserModel(resData.email, resData.localId, resData.idToken, expirationDate);
          this.user.next(user);
          this.saveUserToLocalStorage(user);
        })
      );
  }

  Logout() {
    this.user.next(null);
    this.removeUserFromLocalStorage();
  }

  
}
