import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {AccountService} from '../../../core/services/account-service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  private accountService = inject(AccountService);
  private router = inject(Router);

  credentials =
    {
    email: '',
    password: ''
  };

  errorMessage = '';
  isLoading = false;

  login(): void
  {
    if (!this.credentials.email || !this.credentials.password)
    {
      this.errorMessage = 'Please enter both email and password';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.accountService.login(this.credentials).subscribe(
      {
      next: (response: any) => {
        this.isLoading = false;
        this.accountService.setUser(response);
        this.router.navigate(['/dashboard']).then(() => {
          window.location.reload();
        });
      },
      error: (err) =>
      {
        this.isLoading = false;
        this.errorMessage = err.error?.message || 'Login failed';
        console.error(err);
      }
    });
  }
}
