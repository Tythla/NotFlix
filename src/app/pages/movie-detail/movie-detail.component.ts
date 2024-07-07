import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TmdbService } from '../../services/tmdb.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { TrailerComponent } from '../../components/trailer/trailer.component';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterModule,
    CommonModule,
    MatButtonModule,
    YouTubePlayerModule,
    TrailerComponent
  ],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss',
})
export class MovieDetailComponent {
  movie: any;
  previews: any[] = [];
  casts: any[] = [];
  genres: string = '';
  length: number = 0;
  year: string = '';
  videos: any[] = [];

  constructor(private router: ActivatedRoute, private tmdb: TmdbService, private dialog: MatDialog) {}

  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id');
    if (id) {
      this.tmdb.getMovieDetail(+id).subscribe((data) => {
        this.movie = data;
        this.genres = data.genres
          .map((genres: { name: any }) => genres.name)
          .join(', ');
        this.length = data.runtime;
        this.year = data.release_date.substring(0, 4);
      });
      this.tmdb.getMovieImages(+id).subscribe((data) => {
        this.previews = data.backdrops;
      });
      this.tmdb.getMovieCasts(+id).subscribe((data) => {
        this.casts = data.cast;
      });
      this.tmdb.getMovieVideos(+id).subscribe((data) => {
        this.videos = data.results.filter((video:any) => video.site === 'YouTube');
      });
    }
  }

  trailerDialog(index: number) {
    this.dialog.open(TrailerComponent, {
      data: { videos: this.videos, currentIndex: index },
      // width: '100vw',
      maxWidth: '100vw',
      // height:'50vh'
    })
  }
}
