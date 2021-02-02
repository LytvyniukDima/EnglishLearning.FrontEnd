import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuardService } from 'src/app/authorization/serives/admin-guard.service';
import { SignInComponent } from 'src/app/authorization/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/authorization/sign-up/sign-up.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { 
    path: '',
    canActivate: [AdminGuardService],
    component: MainPageComponent,
  },
  {
    path: 'uploaded-files',
    canActivate: [AdminGuardService],
    loadChildren: () => import('./uploaded-files/uploaded-files.module').then(m => m.UploadedFilesModule)
  },
  {
    path: 'grammar-analyse',
    canActivate: [AdminGuardService],
    loadChildren: () => import('./grammar-analyse/grammar-analyse-routing.module').then(m => m.GrammaranalyseRoutingModule)
  },
  { path: 'sign_in', component: SignInComponent },
  { path: 'sign_up', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
