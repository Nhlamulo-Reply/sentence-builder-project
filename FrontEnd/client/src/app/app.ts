import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Login} from './features/auth/login/login';
import {Dashboard} from './features/dashboard/dashboard/dashboard';
import {Navbar} from './core/layout/navbar/navbar';
import {Builder} from './features/sentence-builder/builder/builder';
import {History} from './features/sentence-builder/history/history';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App
{
  title = 'LexiCraft';
}
