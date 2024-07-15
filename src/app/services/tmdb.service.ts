import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:3000/movies';

  getPopularMovies(page: number = 1): Observable<any> {
    const url = `${this.apiUrl}/popular?page=${page}`;
    return this.http.get(url);
  }

  getMovieDetail(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }

  getMovieImages(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}/images`;
    return this.http.get(url);
  }

  getMovieCasts(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}/casts`;
    return this.http.get(url);
  }

  getMovieVideos(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}/videos`;
    return this.http.get(url);
  }
}
