import { Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { PanelComponent } from './panel/panel.component';
import { RegisterComponent } from './Auth/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'panel',
    component: PanelComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];
