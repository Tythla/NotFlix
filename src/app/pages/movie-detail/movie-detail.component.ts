import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TmdbService } from '../../services/tmdb.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { TrailerComponent } from '../../components/trailer/trailer.component';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterModule,
    CommonModule,
    MatButtonModule,
    YouTubePlayerModule,
    TrailerComponent,
  ],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss',
})
export class MovieDetailComponent {
  movie: Movie | null = null;
  previews: any[] = [];
  casts: any[] = [];
  genres: string = '';
  length: number = 0;
  year: string = '';
  videos: any[] = [];

  backgroundImageUrl: string = '';

  constructor(
    private route: ActivatedRoute,
    private tmdb: TmdbService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.movie = data['movie'] as Movie | null;

      if (this.movie) {
        this.genres = this.movie.genres.map((genre) => genre.name).join(', ');
        this.length = this.movie.runtime;
        this.year = this.movie.release_date.substring(0, 4);

        this.tmdb.getMovieImages(this.movie.id).subscribe((data) => {
          this.previews = data.backdrops;
          if (this.previews.length > 0) {
            this.backgroundImageUrl = `https://image.tmdb.org/t/p/w500${this.previews[0].file_path}`;
          }
        });
        this.tmdb.getMovieCasts(this.movie.id).subscribe((data) => {
          this.casts = data.cast;
        });
        this.tmdb.getMovieVideos(this.movie.id).subscribe((data) => {
          this.videos = data.results.filter(
            (video: any) => video.site === 'YouTube'
          );
        });
      }
    });
  }

  trailerDialog(index: number) {
    this.dialog.open(TrailerComponent, {
      data: { videos: this.videos, currentIndex: index },
      // width: '100vw',
      maxWidth: '100vw',
      // height:'50vh'
    });
  }
}
