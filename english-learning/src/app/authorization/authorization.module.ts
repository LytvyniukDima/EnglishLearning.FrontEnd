import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthService } from './serives/auth.service';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import { AuthInterceptor } from './serives/auth.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { AdminGuardService } from './serives/admin-guard.service';
import { ForbiddenPageComponent } from './forbidden-page/forbidden-page.component';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    ForbiddenPageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthorizationRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        allowedDomains: [environment.ApiBaseUrl],
        tokenGetter: () => {
          return localStorage.getItem('token');
        }
      }
    })
  ],
  providers: [
    AuthService,
    AdminGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class AuthorizationModule { }
