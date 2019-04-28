import { Component, OnInit } from '@angular/core';
import { SignUpModel } from '../models/SignUpModel';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  validationForm: FormGroup;
  public user = new SignUpModel();
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
    this.user = new SignUpModel();
  }

  onSignUp(): void {
    let password = this.validationForm.controls['password'].value;
    let confirmPassword = this.validationForm.controls['confirmPassword'].value;
    
    this.differentPasswords = false;
    if (password != confirmPassword) {
      this.differentPasswords = true;
      return;
    }
  }
}
