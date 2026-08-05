import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../../core/services/account-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  private accountService = inject(AccountService);

  private router = inject(Router);

  credentials = {
    email: '',
    password: ''
  };

  login() {

    this.accountService.login(this.credentials).subscribe({
      next: res => {
        console.log(res);
        this.router.navigateByUrl('/dashboard');
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
