import {Component, inject, OnInit} from '@angular/core';
import {AccountService} from '../../../core/services/account-service';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  standalone: true
})
export class Dashboard implements OnInit
{
  private accountService = inject(AccountService);

  username = 'User';

  ngOnInit(): void
  {
    const user = this.accountService.getUser();
    this.username = user?.username || user?.email || 'User';
  }

}
