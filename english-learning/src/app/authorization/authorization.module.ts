import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthService } from './serives/auth.service';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthorizationRoutingModule } from './authorization-routing.module';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthorizationRoutingModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthorizationModule { }
