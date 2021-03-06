import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AdminGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}
  
  canActivate(): boolean {
    if (!this.auth.isAuthentificated || this.auth.isTokenExpired) {
      this.auth.logout();
      this.router.navigate(['sign_in']);
      return false;
    }

    if (!this.auth.isAdmin) {
      this.router.navigate(['forbidden']);
      return false;
    }

    return true;
  }
}
