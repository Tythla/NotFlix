import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [],
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.scss'
})
export class MovieItemComponent {
  @Input() movie: any;

}
