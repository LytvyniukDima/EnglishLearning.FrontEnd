import { Component, OnInit } from '@angular/core';
import { SignUpModel } from '../models/SignUpModel';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../serives/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  validationForm: FormGroup;
  confirmPassword = "";
  differentPasswords = false;
  userAlreadyExist = false;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { 
    this.validationForm = this.fb.group({
      firstName: ['',[ Validators.required, Validators.maxLength(40), Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [ Validators.required, Validators.maxLength(40), Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [ Validators.required, Validators.email]],
      password: ['', [ Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}')]],
      confirmPassword: ['', [ Validators.required, Validators.minLength(6), Validators.maxLength(40)]]
    })
  }

  ngOnInit() {
  }

  onSignUp(): void {
    this.userAlreadyExist = false;
    let password = this.validationForm.controls['password'].value;
    let confirmPassword = this.validationForm.controls['confirmPassword'].value;
    
    this.differentPasswords = false;
    if (password != confirmPassword) {
      this.differentPasswords = true;
      return;
    }

    let signUpModel = this.createSignUpModel();

    this.authService.signUp(signUpModel).subscribe(data => { 
      this.router.navigate(['']);
    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('An error occurred:', err.error.message);
        } else {
          if (err.status == 422) {
            this.userAlreadyExist = true;
          }
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      })
  }

  createSignUpModel(): SignUpModel {
    let signUpModel = new SignUpModel();

    signUpModel.name = this.validationForm.controls['firstName'].value;
    signUpModel.surname = this.validationForm.controls['lastName'].value;
    signUpModel.email = this.validationForm.controls['email'].value;
    signUpModel.password = this.validationForm.controls['password'].value;

    return signUpModel;
  }
}
