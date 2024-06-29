import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  constructor(private router: Router) { };

  toPlan() {
    this.router.navigate(['choose-plan']);
  }

}
