import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SignInModel } from '../models/SignInModel';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../serives/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  validationForm: FormGroup;
  confirmPassword = "";
  incorrecPassword = false;
  
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { 
    this.validationForm = this.fb.group({
      email: ['', [ Validators.required, Validators.email]],
      password: ['', [ Validators.required, Validators.maxLength(40)]]
    })
  }

  ngOnInit() {
  }

  onSignIn(): void {
    this.incorrecPassword = false;
    let signInModel = this.createSignInModel();

    this.authService.signIn(signInModel).subscribe(data => {
      console.log(data);
      localStorage.setItem('token', data.toString());
      this.router.navigate(['']);
    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('An error occurred:', err.error.message);
        } else {
          this.incorrecPassword = true;
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      })
  }

  createSignInModel(): SignInModel {
    let signInModel = new SignInModel();

    signInModel.email = this.validationForm.controls['email'].value;
    signInModel.password = this.validationForm.controls['password'].value;

    return signInModel;
  }
}
