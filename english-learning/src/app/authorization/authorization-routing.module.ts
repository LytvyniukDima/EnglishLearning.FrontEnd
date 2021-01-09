import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForbiddenPageComponent } from './forbidden-page/forbidden-page.component';


const routes: Routes = [
  { path: 'sign_in', component: SignInComponent},
  { path: 'sign_up', component: SignUpComponent},
  { path: 'forbidden', component: ForbiddenPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthorizationRoutingModule { }
