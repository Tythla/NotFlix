import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

  constructor(private router: Router) { };

  toLogin() {
    this.router.navigate(['login']);
  }

  toMovieList() {
    this.router.navigate(['movie-list']);
  }

}
