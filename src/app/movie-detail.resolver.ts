// movie-detail.resolver.ts
import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { TmdbService } from './services/tmdb.service';
import { Movie } from './models/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieDetailResolver implements Resolve<Movie | null> {
  constructor(private tmdbService: TmdbService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Movie | null> {
    const movieIdParam = route.paramMap.get('id');
    const movieId = movieIdParam ? +movieIdParam : null;

    if (movieId === null) {
      return of(null);
    }

    return this.tmdbService.getMovieDetail(movieId);
  }
}
