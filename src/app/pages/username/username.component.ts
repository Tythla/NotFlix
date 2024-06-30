import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-username',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './username.component.html',
  styleUrl: './username.component.scss'
})
export class UsernameComponent {

  constructor(private router: Router) { };

  toMovieList() { };

}
