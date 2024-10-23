import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
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


  contactItems = [
    {
      icon: 'bi bi-geo-alt', // Bootstrap icon for location
      title: 'Address',
      description: '789 Oak Lane, Lakeside, TX 54321',
      color:'#FB8738',
      bg:'rgba(251, 135, 56,0.1)'
    },
    {
      icon: 'bi bi-telephone', // Bootstrap icon for phone
      title: 'Contact',
      description: '1800-2541-2541, 1800-14-0147',
      color:'#1998B7',
      bg:'rgba(25, 152, 183,0.1)'
    },
    {
      icon: 'bi bi-envelope', // Bootstrap icon for email
      title: 'Email',
      description: 'pagedone1234@gmail.com',
      color:'#36B062',
      bg:'rgba(54, 176, 98,0.1)'
    },
    {
      icon: 'fi fi-rs-thumbtack', // Bootstrap icon for map
      title: 'Google Map',
      description: 'Discover our prime location',
      link: '#', // Add your actual link here
      linkText: 'View More',
      color:'#E25090',
      bg:'rgba(226, 80, 144,0.1)'
    }
  ];




  
}
