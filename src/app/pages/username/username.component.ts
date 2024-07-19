import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AsyncValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { SignupService } from '../../services/signup.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../components/footer/footer.component";
import { Observable, map, catchError, of } from 'rxjs';

@Component({
  selector: 'app-username',
  standalone: true,
  imports: [
    NavbarComponent,
    ReactiveFormsModule,
    CommonModule,
    FooterComponent,
  ],
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss'],
})
export class UsernameComponent {
  signupForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private signupService: SignupService
  ) {
    this.signupForm = this.fb.group({
      username: [
        '',
        [Validators.required, Validators.maxLength(10)],
        [this.usernameValidator()],
      ],
      api: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.signupForm.value);
    if (
      this.signupForm.controls['username'].valid &&
      this.signupForm.controls['api'].valid
    ) {
      this.signupService.updateForm(this.signupForm.value);
      this.signupService
        .submitSignup(this.signupService.getFormData())
        .subscribe(
          (response) => {
            console.log('User registered successfully', response);
            window.alert('Signup successful!');
            this.router.navigate(['movie-list']);
          },
          (error) => {
            console.error('Error registering user', error);
          }
        );
    }
  }

  usernameValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.signupService.checkUsernameExists(control.value).pipe(
        map((response) => {
          return response.exists ? { usernameExists: true } : null;
        }),
        catchError(() => of(null))
      );
    };
  }
}
