import { Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { PanelComponent } from './panel/panel.component';
import { RegisterComponent } from './Auth/register/register.component';
import path from 'node:path';
import { Component } from '@angular/core';
import { DetailComponent } from './panel/detail/detail.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'panel',
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
      path:'panel/:id',
      component: DetailComponent,
    },
  {
    path: 'register',
    component: RegisterComponent,
  },
];
