import { Routes } from '@angular/router';
import {Login} from './features/auth/login/login';
import {Dashboard} from './features/dashboard/dashboard/dashboard';
import {Navbar} from './core/layout/navbar/navbar';
import {Builder} from './features/sentence-builder/builder/builder';
import {History} from './features/sentence-builder/history/history';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'builder', component: Builder },
  { path: 'history', component: History },

];
