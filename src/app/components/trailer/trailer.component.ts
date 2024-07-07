import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef, MatDialogActions } from '@angular/material/dialog';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-trailer',
  standalone: true,
  imports: [YouTubePlayerModule,MatButton, MatDialogActions],
  templateUrl: './trailer.component.html',
  styleUrl: './trailer.component.scss',
})
export class TrailerComponent {
  id: string;
  index: number;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { videos: any[]; currentIndex: number },
    public dialogRef: MatDialogRef<TrailerComponent>
  ) {
    this.index = data.currentIndex;
    this.id = data.videos[this.index].key;
  }

  prevVideo() {
    if (this.index > 0) {
      this.index--;
      this.id = this.data.videos[this.index].key;
    }
  }

  nextVideo() {
    if (this.index < this.data.videos.length - 1) {
      this.index++;
      this.id = this.data.videos[this.index].key;
    }
  }
}
