import { Routes } from '@angular/router';
import {Login} from './features/auth/login/login';
import {Dashboard} from './features/dashboard/dashboard/dashboard';
import {Navbar} from './core/layout/navbar/navbar';
import {Builder} from './features/sentence-builder/builder/builder';
import {History} from './features/sentence-builder/history/history';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
  { path: 'builder', component: Builder, canActivate: [authGuard] },
  { path: 'history', component: History, canActivate: [authGuard] },

];
