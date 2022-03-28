
import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {BackendService} from "../../shared/backend.service";
import {User} from "../../interfaces/user";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AlreadyExistsDialogComponent} from "./already-exists-dialog/already-exists-dialog.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true;
  user!: User;

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
    let pass = this.registerForm?.get('password')?.value;
    let confirmPass = this.registerForm?.get('passwordrepeat')?.value
    return pass === confirmPass ? null : { notSame: true }
  }

  registerForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.compose([
      Validators.required,
      Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
      Validators.minLength(8),
      Validators.maxLength(20)])
    ],
    passwordrepeat: [null],
  }, { validators: this.checkPasswords });


  constructor(private fb: FormBuilder,
              private bs: BackendService,
              private dialog: MatDialog,
              private router: Router) {}

  onSubmit(): void {
    const values = this.registerForm.value;
    this.user = {
      _id: '',
      firstname: values.firstName,
      lastname: values.lastName,
      email: values.email,
      password: values.password};

    this.bs.registerNewUser(this.user).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      })
    this.router.navigateByUrl('/registration');

  }

  checkIfExists(evt: any): void {
    let email = this.registerForm.get('email')?.value;
    this.bs.checkIfExists(email).subscribe(
      response => {
        console.log(response);
        if(response) {
          this.openDialog();
        }
      },
      error => {
        console.log(error);
      }
    );
  }


  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(AlreadyExistsDialogComponent, dialogConfig);
  }
}
