import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from 'src/app/authorization/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/authorization/sign-up/sign-up.component';

const routes: Routes = [
  { path: 'sign_in', component: SignInComponent },
  { path: 'sign_up', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
