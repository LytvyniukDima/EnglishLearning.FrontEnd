import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly registrationPath = '/api/identity/user';
  private readonly authorizationPath = '/api/identity/authorization';
  
  private readonly apiBaseUrl: string;
  private decode = require('jwt-decode');

  constructor() { }
}
