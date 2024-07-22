import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import {
  CdkVirtualScrollViewport,
  ScrollingModule,
} from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { MovieItemComponent } from '../../components/movie-item/movie-item.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { TmdbService } from '../../services/tmdb.service';
import { ScrollService } from '../../services/scroll.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Subscription } from 'rxjs';

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
export class MovieListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(CdkVirtualScrollViewport) viewport!: CdkVirtualScrollViewport;
  popularMovies: any[] = [];
  currentPage: number = 1;
  isLoading: boolean = false;
  private targetScrollPosition: number = 0;
  private subscriptions: Subscription = new Subscription();
  private isReturningFromDetail: boolean = false;

  constructor(
    private tmdb: TmdbService,
    private scrollService: ScrollService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadMoreMovies();
  }

  ngAfterViewInit() {
    this.isReturningFromDetail = this.scrollService.getScrollPosition() > 0;
    if (this.isReturningFromDetail) {
      this.targetScrollPosition = this.scrollService.getScrollPosition();
      this.checkAndRestoreScrollPosition();
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  loadMoreMovies() {
    if (this.isLoading) return;

    this.isLoading = true;
    this.tmdb
      .getPopularMovies(this.currentPage)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((response: any) => {
        this.popularMovies = [...this.popularMovies, ...response.results];
        this.currentPage++;
        if (this.isReturningFromDetail) {
          this.checkAndRestoreScrollPosition();
        }
      });
  }

  checkAndRestoreScrollPosition() {
    setTimeout(() => {
      if (
        this.viewport.measureScrollOffset() < this.targetScrollPosition &&
        !this.isLoading
      ) {
        this.viewport.scrollToOffset(this.targetScrollPosition);
      }
    }, 0);
  }

  onScroll() {
    const end = this.viewport.getRenderedRange().end;
    const total = this.viewport.getDataLength();
    if (end === total) {
      this.loadMoreMovies();
    }
    this.scrollService.setScrollPosition(this.viewport.measureScrollOffset());
  }

  navigateToDetail(movieId: number) {
    this.scrollService.setScrollPosition(this.viewport.measureScrollOffset());
    this.router.navigate(['/movie', movieId]);
  }
}
