import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';
import { SignInModel } from '../models/SignInModel';
import { SignUpModel } from '../models/SignUpModel';

declare let require: any;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly registrationPath: string;
  private readonly authorizationPath: string;

  private readonly apiBaseUrl: string;
  private decode = require('jwt-decode');

  constructor(private http: HttpClient, private router: Router) {
    this.apiBaseUrl = environment['ApiBaseUrl'];
    this.registrationPath = this.apiBaseUrl.concat('/api/identity/user');
    this.authorizationPath = this.apiBaseUrl.concat('/api/identity/authorization');
  }

  signUp(credentials: SignUpModel) {
    return this.http.post<any>(this.registrationPath, credentials);
  }

  signIn(credentials: SignInModel) {
    return this.http.post<string>(this.authorizationPath, credentials, { responseType: 'text' as 'json' });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

  get isAuthentificated() {
    return !!localStorage.getItem('token');
  }
}