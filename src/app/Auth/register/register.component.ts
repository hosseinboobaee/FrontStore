import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RegisterUserModel } from '../../Model/RegisterUserModel';
import { AuthService } from '../../Services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
  public registerForm: FormGroup;
  constructor( private auth: AuthService){

  }
  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl(null,[Validators.required, Validators.email]),
      firstName: new FormControl(),
      lastName: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl(),
      address: new FormControl(),
    });
  }

  submitRegisterForm(){
   const registerForm = new RegisterUserModel(
    this.registerForm.controls['email'].value,
    this.registerForm.controls['firstName'].value,
    this.registerForm.controls['lastName'].value,
    this.registerForm.controls['password'].value,
    this.registerForm.controls['confirmPassword'].value,
    this.registerForm.controls['address'].value,
   )
   this.auth.registerUser(registerForm).subscribe(x => {
    if(x.status === 'Success'){
      this.registerForm.reset();
    }
    
   });
  }



}
