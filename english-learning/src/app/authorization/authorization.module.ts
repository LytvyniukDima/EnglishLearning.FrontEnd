import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthService } from './serives/auth.service';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import { AuthInterceptor } from './serives/auth.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthorizationRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class AuthorizationModule { }
