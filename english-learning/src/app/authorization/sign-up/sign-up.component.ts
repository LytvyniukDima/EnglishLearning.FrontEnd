import { Component, OnInit } from '@angular/core';
import { SignUpModel } from '../models/SignUpModel';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  validationForm: FormGroup;
  confirmPassword = "";
  differentPasswords = false;

  constructor(private fb: FormBuilder) { 
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
    let password = this.validationForm.controls['password'].value;
    let confirmPassword = this.validationForm.controls['confirmPassword'].value;
    
    this.differentPasswords = false;
    if (password != confirmPassword) {
      this.differentPasswords = true;
      return;
    }

    let signUpModel = this.createSignUpModel();
  }

  createSignUpModel(): SignUpModel {
    let signUpModel = new SignUpModel();

    signUpModel.firstName = this.validationForm.controls['firstName'].value;
    signUpModel.lastName = this.validationForm.controls['lastName'].value;
    signUpModel.email = this.validationForm.controls['email'].value;
    signUpModel.password = this.validationForm.controls['password'].value;

    return signUpModel;
  }
}
