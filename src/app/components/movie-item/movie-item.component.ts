import { NgStyle } from '@angular/common';
import { Component, Input, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent {
  @Input() movie: any;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    const movieItemElement = this.el.nativeElement.querySelector('.movie-item');
    this.renderer.setStyle(
      movieItemElement,
      'background-image',
      `url('https://image.tmdb.org/t/p/w500${this.movie.poster_path}')`
    );
  }
}
