import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SignInModel } from '../models/SignInModel';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  validationForm: FormGroup;
  confirmPassword = "";
  differentPasswords = false;
  
  constructor(private fb: FormBuilder) { 
    this.validationForm = this.fb.group({
      email: ['', [ Validators.required, Validators.email]],
      password: ['', [ Validators.required, Validators.minLength(6), Validators.maxLength(40)]]
    })
  }

  ngOnInit() {
  }

  onSignIn(): void {
    let signUpModel = this.createSignInModel();
  }

  createSignInModel(): SignInModel {
    let signInModel = new SignInModel();

    signInModel.email = this.validationForm.controls['email'].value;
    signInModel.password = this.validationForm.controls['password'].value;

    return signInModel;
  }
}
