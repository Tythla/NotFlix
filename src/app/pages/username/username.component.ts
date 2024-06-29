import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-username',
  standalone: true,
  imports: [],
  templateUrl: './username.component.html',
  styleUrl: './username.component.scss'
})
export class UsernameComponent {

  constructor(private router: Router) { };

  toMovieList() { };

}
