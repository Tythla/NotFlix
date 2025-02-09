import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SignupService } from '../../services/signup.service';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AsyncValidatorFn,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../components/footer/footer.component";
import { catchError, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule, NavbarComponent, ReactiveFormsModule, CommonModule, FooterComponent],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private signupService: SignupService
  ) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email],[this.emailValidator()]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      plan: ['', Validators.required],
      username: ['', [Validators.required, Validators.maxLength(10)]],
      api: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.signupForm.value);
    if (
      this.signupForm.get('email')!.valid &&
      this.signupForm.get('password')!.valid
    ) {
      this.signupService.updateForm(this.signupForm.value);
      this.router.navigate(['choose-plan']);
    }
  }

  emailValidator(): AsyncValidatorFn{
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.signupService.checkEmailExists(control.value).pipe(
        map((response) => {
          return response.exists ? { emailExists: true } : null;
        }),
        catchError(() => of(null))
      );
    };
  }
}
