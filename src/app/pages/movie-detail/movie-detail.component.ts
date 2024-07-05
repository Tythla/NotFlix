import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TmdbService } from '../../services/tmdb.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [NavbarComponent,RouterModule, CommonModule],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss'
})
export class MovieDetailComponent {
  movie: any;

  constructor(private router: ActivatedRoute, private tmdb:TmdbService) { }
  
  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id');
    if (id) {
      this.tmdb.getMovieDetail(+id).subscribe((data) => { this.movie = data })
      console.log(this.movie);      
    }

  }
}
