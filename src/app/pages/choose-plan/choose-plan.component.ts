import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SignupService } from '../../services/signup.service';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-choose-plan',
  standalone: true,
  imports: [RouterModule, NavbarComponent, ReactiveFormsModule, CommonModule, FooterComponent],
  templateUrl: './choose-plan.component.html',
  styleUrls: ['./choose-plan.component.scss'],
})
export class ChoosePlanComponent {
  signupForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private signupService: SignupService
  ) {
    this.signupForm = this.fb.group({
      plan: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.signupForm.value);
    if (this.signupForm.controls['plan'].valid) {
      this.signupService.updateForm(this.signupForm.value);
      this.router.navigate(['username']);
    }
  }
}
