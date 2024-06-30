import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-choose-plan',
  standalone: true,
  imports: [RouterModule,NavbarComponent],
  templateUrl: './choose-plan.component.html',
  styleUrl: './choose-plan.component.scss'
})
export class ChoosePlanComponent {

  constructor(private router: Router) { };

  toUsername() {
    this.router.navigate(['username']);
  }

}
