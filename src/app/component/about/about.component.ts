import { Component, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {



  contentList = [
    {
      title: 'Affiliate Marketing',
      description: 'Learn how to monetize with strategic partnerships and generate passive income.',
      buttonText: 'Learn More!',
      icon: 'bi bi-link-45deg', // Bootstrap icon class
    },
    {
      title: 'Digital Creation',
      description: 'Discover powerful tools and methods to create content that engages your audience.',
      buttonText: 'Watch Now!',
      icon: 'bi bi-palette',
    },
    {
      title: 'Social Media Growth',
      description: 'Maximize your reach and grow your following with targeted content strategies.',
      buttonText: 'Explore!',
      icon: 'bi bi-graph-up-arrow',
    },
    {
      title: 'Content Monetization',
      description: 'Unlock the secrets of earning through your digital content creation.',
      buttonText: 'Get Started!',
      icon: 'bi bi-cash-stack',
    },
  ];

  avatars = [
    'https://randomuser.me/api/portraits/women/44.jpg',
    'https://randomuser.me/api/portraits/women/45.jpg',
    'https://randomuser.me/api/portraits/men/46.jpg',
    'https://randomuser.me/api/portraits/men/47.jpg',
    'https://randomuser.me/api/portraits/women/48.jpg'
  ];
  selectedTab: string = 'mission';  // Default selected tab

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  slides = [
    { m1: "“I was skeptical about using a brokerage comparison service at first. The comparison tools are comprehensive and easy to use.”", position: 'Project Manager', name: 'Danish Jamil' },
    { m1: "“I was skeptical about using a brokerage comparison service at first. The comparison tools are comprehensive and easy to use.”", position: 'Project Manager', name: 'Danish Jamil' },
    { m1: "“I was skeptical about using a brokerage comparison service at first. The comparison tools are comprehensive and easy to use.”", position: 'Project Manager', name: 'Danish Jamil' },
    { m1: "“I was skeptical about using a brokerage comparison service at first. The comparison tools are comprehensive and easy to use.”", position: 'Project Manager', name: 'Danish Jamil' },
  ];
  slideConfig =
    {
      "slidesToShow": 1,
      "slidesToScroll": 1,
      autoplay: true,
    };
    @ViewChild('slickModal') slickModal!: SlickCarouselComponent;

    slickPrev() {
      this.slickModal.slickPrev();  // Slide to the previous item
    }
  
    slickNext() {
      this.slickModal.slickNext();  // Slide to the next item
    }
    
    isAtStart: boolean = true;  // Disable left button by default
    isAtEnd: boolean = false;
  

    checkCarouselPosition(event: any) {
      const currentIndex = event.currentSlide;
      const totalSlides = this.slides.length;
  
      // Check if the carousel is at the start or the end
      this.isAtStart = currentIndex === 0;
      this.isAtEnd = currentIndex === totalSlides - 1;
    }



    
}