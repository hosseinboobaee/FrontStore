import { Component, OnInit } from '@angular/core';
import { CurrentUserModel } from '../Model/CurrentUserModel';
import { AuthService } from '../Services/auth.service';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  user: CurrentUserModel;
  constructor(private auth: AuthService){

  }
  ngOnInit(): void {
    this.auth.getCurrentUser().subscribe(x => {
      this.user = x;
      console.log(this.user);
      
    });
  }

}
