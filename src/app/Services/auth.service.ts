import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RegisterUserModel } from '../Model/RegisterUserModel';
import { LoginUserModel } from '../Model/LoginUserModel';
import { ILoginUser } from '../Model/ILoginInterface';
import {  CurrentUserModel } from '../Model/CurrentUserModel';
import { DomainName } from '../Utility/PathTools';
import { ICheckUser } from '../Model/ICheckUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser:BehaviorSubject<CurrentUserModel> =  new BehaviorSubject<CurrentUserModel>(null);
public dominName:string = DomainName; 
  constructor(private http: HttpClient) {
    
   }

   setCurrenUser(user:CurrentUserModel){
    this.currentUser.next(user);
   }
   getCurrentUser():Observable<CurrentUserModel>{
    return this.currentUser;
   }
   registerUser(registerUser: RegisterUserModel){
    return this.http.post<any>('/Account/register', registerUser)
   }
   loginUser(loginUser: LoginUserModel): Observable<ILoginUser>{
    return this.http.post<ILoginUser>('/Account/login', loginUser)
   }
   checkUserAuth(){
    return this.http.get('/Account/check-auth')
  }
}
