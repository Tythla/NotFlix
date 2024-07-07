import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TmdbService } from '../../services/tmdb.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [NavbarComponent,RouterModule, CommonModule,MatButtonModule],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss'
})
export class MovieDetailComponent {
  movie: any;
  previews: any[] = [];
  casts: any[] = [];
  genres: string = '';
  length: number = 0;
  year: string = '';

  constructor(private router: ActivatedRoute, private tmdb:TmdbService) { }
  
  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id');
    if (id) {
      this.tmdb.getMovieDetail(+id).subscribe((data) => {
        this.movie = data;
        this.genres = data.genres.map((genres: { name: any; }) => genres.name).join(', ');
        this.length = data.runtime;
        this.year = data.release_date.substring(0,4)
       });
      this.tmdb.getMovieImages(+id).subscribe((data) => { this.previews = data.backdrops; });
      this.tmdb.getMovieCasts(+id).subscribe((data) => {this.casts = data.cast;});    
    }

  }
}
