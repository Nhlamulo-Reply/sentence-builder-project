import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AccountService
{

  private http = inject(HttpClient);
  private baseApiUrl = environment.apiUrl;

  login(credentials: any)
  {
    return this.http.post(`${this.baseApiUrl}account/login`, credentials);
  }


  setUser(user: any)
  {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): any
  {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  isLoggedIn(): boolean
  {
    return localStorage.getItem('user') !== null;
  }

  logout()
  {
    localStorage.removeItem('user');
  }
}
