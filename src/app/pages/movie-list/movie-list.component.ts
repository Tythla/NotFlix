import { Component, OnInit, ViewChild } from '@angular/core';
import {
  CdkVirtualScrollViewport,
  ScrollingModule,
} from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { MovieItemComponent } from '../../components/movie-item/movie-item.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { TmdbService } from '../../services/tmdb.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    CommonModule,
    MovieItemComponent,
    NavbarComponent,
    CdkVirtualScrollViewport,
    ScrollingModule,
  ],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport) viewport!: CdkVirtualScrollViewport;
  popularMovies: any[] = [];
  currentPage: number = 1;
  isLoading: boolean = false;

  constructor(private tmdb: TmdbService) {}

  ngOnInit() {
    this.loadMoreMovies();
  }

  loadMoreMovies() {
    if (this.isLoading) return;

    this.isLoading = true;
    this.tmdb
      .getPopularMovies(this.currentPage)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((response: any) => {
        console.log('Movie response page:', response.page);
        this.popularMovies = [...this.popularMovies, ...response.results];
        this.currentPage++;
      });
  }

  onScroll() {
    const end = this.viewport.getRenderedRange().end;
    const total = this.viewport.getDataLength();
    if (end === total) {
      this.loadMoreMovies();
    }
  }
}
