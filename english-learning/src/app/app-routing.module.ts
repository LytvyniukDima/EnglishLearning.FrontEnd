import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './authorization/sign-in/sign-in.component';
import { SignUpComponent } from './authorization/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'sign_in', component: SignInComponent},
  { path: 'sign_up', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
