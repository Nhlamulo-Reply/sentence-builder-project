import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AccountService {

  private http = inject(HttpClient)

   private baseApiUrl = environment.apiUrl;
  protected  credentials = []

  login(credentials : any){
   return  this.http.post(`${this.baseApiUrl}account/login`, credentials);
  }
}
