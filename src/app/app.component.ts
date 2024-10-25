import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ayeshaparween';


  isBotOpen = false;

  toggleBot() {
    this.isBotOpen = !this.isBotOpen;
  }


  ngAfterViewInit(): void {
    this.autoPlayOnMobile();
  }

  autoPlayOnMobile() {
    const videoElement: HTMLVideoElement = document.querySelector('video');
    if (videoElement) {
      // Check if the video is muted and autoplay is allowed
      videoElement.muted = true;
      videoElement.play().catch((error) => {
        console.log('Autoplay was prevented:', error);
        // Optionally show a play button to the user
      });
    }
  }
}
