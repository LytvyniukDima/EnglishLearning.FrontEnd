import { Component, OnInit } from "@angular/core";
import { SignUpModel } from "../models/SignUpModel";
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../serives/auth.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"],
})
export class SignUpComponent implements OnInit {
  validationForm: FormGroup;
  confirmPassword = "";
  differentPasswords = false;
  userAlreadyExist = false;

  private grammarPartsSet = new Set<string>();
  private videoTypesSet = new Set<string>();
  private textTypesSet = new Set<string>();

  englishLevels = [
    "Elementary",
    "PreIntermediate",
    "Intermediate",
    "UpperIntermediate",
    "Advanced",
  ];

  grammarParts = [
      "Present Simple",
      "Present Continuous",
      'Present Simple and Present Continuous',
      "Future Plans",
      "Question Tags",
      "Possessive Adjectives",
      "Suffixes",
      "Present Perfect"
  ];

  videoTypes = [
    "Audio Clip",
    "Film Fragment",
    "TED",
    "Trailer",
    "Cartoon Fragment"
  ];

  textTypes = [
    "Tragedy fragment",
    "Poem",
    "Book Fragment",
    "Story"
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.validationForm = this.fb.group({
      firstName: [
        "",
        [
          Validators.required,
          Validators.maxLength(40),
          Validators.pattern("^[a-zA-Z]+$"),
        ],
      ],
      lastName: [
        "",
        [
          Validators.required,
          Validators.maxLength(40),
          Validators.pattern("^[a-zA-Z]+$"),
        ],
      ],
      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}"
          ),
        ],
      ],
      confirmPassword: [
        "",
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40),
        ],
      ],
      englishLevel: [
        "",
        [
          Validators.required,
        ]
      ]
    });
  }

  ngOnInit() {}

  onSignUp(): void {
    this.userAlreadyExist = false;
    let password = this.validationForm.controls["password"].value;
    let confirmPassword = this.validationForm.controls["confirmPassword"].value;

    this.differentPasswords = false;
    if (password != confirmPassword) {
      this.differentPasswords = true;
      return;
    }

    let signUpModel = this.createSignUpModel();

    this.authService.signUp(signUpModel).subscribe(
      (data) => {
        this.router.navigate([""]);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("An error occurred:", err.error.message);
        } else {
          if (err.status == 422) {
            this.userAlreadyExist = true;
          }
          console.log(
            `Backend returned code ${err.status}, body was: ${err.error}`
          );
        }
      }
    );
  }

  createSignUpModel(): SignUpModel {
    let signUpModel = new SignUpModel();

    signUpModel.name = this.validationForm.controls["firstName"].value;
    signUpModel.surname = this.validationForm.controls["lastName"].value;
    signUpModel.email = this.validationForm.controls["email"].value;
    signUpModel.password = this.validationForm.controls["password"].value;
    signUpModel.englishLevel = this.validationForm.controls["englishLevel"].value;
    signUpModel.grammarParts = Array.from(this.grammarPartsSet);
    signUpModel.textTypes = Array.from(this.textTypesSet);
    signUpModel.videoTypes = Array.from(this.videoTypesSet);
  
    return signUpModel;
  }

  getFormControl(name: string): AbstractControl {
    return this.validationForm.controls[name];
  }

  onChangedGrammarPartBox(event) {
    let target = event.target;
    let value = target.value;

    if (target.checked) {
      this.grammarPartsSet.add(value);
    } else {
      this.grammarPartsSet.delete(value);
    }
  }

  onChangedVideoTypeBox(event) {
    let target = event.target;
    let value = target.value;

    if (target.checked) {
      this.videoTypesSet.add(value);
    } else {
      this.videoTypesSet.delete(value);
    }
  }

  onChangedTextTypeBox(event) {
    let target = event.target;
    let value = target.value;

    if (target.checked) {
      this.textTypesSet.add(value);
    } else {
      this.textTypesSet.delete(value);
    }
  }
}
