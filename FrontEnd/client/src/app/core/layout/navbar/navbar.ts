import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import {AccountService} from '../../services/account-service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar implements OnInit
{
  private accountService = inject(AccountService);
  private router = inject(Router);

  isLoggedIn = false;
  username = 'User';

  ngOnInit(): void
  {

    this.isLoggedIn = this.accountService.isLoggedIn();
    const user = this.accountService.getUser();
    this.username = user?.username || user?.email || 'User';
  }

  refreshLoginStatus(): void
  {
    this.isLoggedIn = this.accountService.isLoggedIn();
    const user = this.accountService.getUser();
    this.username = user?.username || user?.email || 'User';
  }

  logout(): void
  {
    this.accountService.logout();
    this.isLoggedIn = false;
    this.username = 'User';
    this.router.navigate(['/login']);
  }
}
