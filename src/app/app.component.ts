import { Component, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from './Auth/register/register.component';
import Swal from 'sweetalert2';
import { LoginComponent } from './Auth/login/login.component';
import { HeaderComponent } from './Header/header.component';
import { AuthService } from './Services/auth.service';
import { ICheckUser } from './Model/ICheckUser';
import { CurrentUserModel } from './Model/CurrentUserModel';
import { SliderComponent } from './panel/slider/slider.component';
import { PresenceService } from './Services/presence.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    SliderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnDestroy {
  constructor(
    private auth: AuthService,
    private signalRService: PresenceService
  ) {}
  ngOnDestroy(): void {
    this.signalRService.hubConnection.off('askServerResponse');
  }
  ngOnInit() {
    this.signalRService.StartConnection();

    this.auth.checkUserAuth().subscribe((x: ICheckUser) => {
      if (x.status == 'Success') {
        const user = new CurrentUserModel(
          x.data.userId,
          x.data.firstName,
          x.data.lastName,
          x.data.email,
          x.data.address
        );
        this.auth.setCurrenUser(user);
      }
    });
  }

  simpleAlert() {
    Swal.fire('Hello world!');
  }

  alertWithSuccess() {
    Swal.fire('Thank you...', 'You submitted succesfully!', 'success');
  }

  confirmBox() {
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }
}
