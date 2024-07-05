import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupService } from '../../services/signup.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-username',
  standalone: true,
  imports: [NavbarComponent,ReactiveFormsModule, CommonModule],
  templateUrl: './username.component.html',
  styleUrl: './username.component.scss'
})
export class UsernameComponent {

  constructor(private router: Router, public signupService:SignupService) { };

  onSubmit() {
    if (this.signupService.signupForm.controls['username'].valid && this.signupService.signupForm.controls['api'].valid) {
      console.log(this.signupService.signupForm.value)
      window.alert('Signup successful!')
    }
  }

  toMovieList(){}

}
