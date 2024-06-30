import { Component } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { CommonModule } from '@angular/common';
import { MovieItemComponent } from '../../components/movie-item/movie-item.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule,MovieItemComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  constructor(private tmdb: TmdbService) {}

  popularMovies: any[] = [];

  ngOnInit() {
    this.tmdb.getPopularMovies().subscribe((response: any) => {
      this.popularMovies = response.results;
    });
    console.log('ngOnInit finished');
  }
}
