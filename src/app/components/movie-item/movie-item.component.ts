import { NgStyle } from '@angular/common';
import { Component, Input, OnInit, Renderer2, ElementRef, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgTiltModule } from '@geometricpanda/angular-tilt';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [NgStyle, RouterModule, NgTiltModule, MatButtonModule],
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit {
  @Input() movie: any;
  @Output() detailClick = new EventEmitter<void>();

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    const movieItemElement = this.el.nativeElement.querySelector('.movie-item');
    if (this.movie && this.movie.poster_path) {
      this.renderer.setStyle(
        movieItemElement,
        'background-image',
        `url('https://image.tmdb.org/t/p/w500${this.movie.poster_path}')`
      );
    }
  }

  navigateToDetail() {
    this.detailClick.emit();
  }
}
