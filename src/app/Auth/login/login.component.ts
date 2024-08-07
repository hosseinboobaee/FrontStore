import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginUserModel } from '../../Model/LoginUserModel';
import { AuthService } from '../../Services/auth.service';
import { CurrentUserModel } from '../../Model/CurrentUserModel';
import { log } from 'console';
import { LocalStorageService } from '../../Services/local-storage.service';
import { ILoginUser } from '../../Model/ILoginInterface';
import { take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private auth: AuthService,
    private localStorage: LocalStorageService,
    private router: Router
  ) {}
  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  submitLoginForm() {
    if (this.loginForm.valid) {
      const userLogin = new LoginUserModel(
        this.loginForm.controls['email'].value,
        this.loginForm.controls['password'].value
      );
      this.auth
        .loginUser(userLogin)
        .pipe(take(1))
        .subscribe((x: ILoginUser) => {
          const currentUser = new CurrentUserModel(
            x.data.userId,
            x.data.firstName,
            x.data.lastName,
            x.data.email,
            x.data.address
          );
          if (x.status === 'Success') {
            this.auth.setCurrenUser(currentUser);
            this.localStorage.setItem('eShopAngular', x.data.token);
            this.loginForm.reset();
            this.router.navigate(['/panel']);
          }
          // this.auth.getCurrentUser().subscribe(x => {
          //   console.log(x);

          // });
        });
    }
  }
  register(){
    this.router.navigate(['/register']);
  }
}
