import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SignupService } from '../../services/signup.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-choose-plan',
  standalone: true,
  imports: [RouterModule,NavbarComponent,ReactiveFormsModule],
  templateUrl: './choose-plan.component.html',
  styleUrl: './choose-plan.component.scss'
})
export class ChoosePlanComponent {

  constructor(private router: Router, public signupService:SignupService) { };

  toUsername() {
    this.router.navigate(['username']);
  }

  onSubmit() {
    if (this.signupService.signupForm.controls['plan'].valid) {
      this.router.navigate(['username']);
    }
  }

}
