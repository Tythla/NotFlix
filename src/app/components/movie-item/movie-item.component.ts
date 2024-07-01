import { NgStyle } from '@angular/common';
import { Component, Input, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';

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

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const card = this.el.nativeElement.querySelector('.movie-item');
    const img = card.querySelector('img');
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (x - centerX) / -10;

    this.renderer.setStyle(
      card,
      'transform',
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    );
    this.renderer.setStyle(img, 'transform', `translateZ(20px)`);
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent) {
    const card = this.el.nativeElement.querySelector('.movie-item');
    const img = card.querySelector('img');
    this.renderer.setStyle(card, 'transform', 'rotateX(0) rotateY(0)');
    this.renderer.setStyle(img, 'transform', 'translateZ(0)');
  }
}
