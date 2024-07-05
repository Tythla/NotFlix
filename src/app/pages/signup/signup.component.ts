import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SignupService } from '../../services/signup.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule,NavbarComponent,CommonModule,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
required: any;

  constructor(private router: Router, public signupService: SignupService) { };

  toPlan() {
    this.router.navigate(['choose-plan']);
  }

  onSubmit() {
    if (this.signupService.signupForm.controls['email'].valid && this.signupService.signupForm.controls['password'].valid) {
      this.router.navigate(['choose-plan']);
    }
  }

}
