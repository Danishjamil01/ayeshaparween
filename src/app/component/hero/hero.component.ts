import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {


  constructor(private router: Router) {

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


  fullText: string = 'A Digital Creator & Affiliate Marketer';
  displayText: string = '';  // Text to be displayed incrementally
  typingSpeed: number = 100;  // Speed of typing in milliseconds


  typeWriter() {
    let index = 0;
    const type = () => {
      if (index < this.fullText.length) {
        this.displayText += this.fullText.charAt(index);
        index++;
        setTimeout(type, this.typingSpeed);  // Call type function after the speed interval
      }
    };
    type();  // Initial call to the type function
  }

  routeTo(pagename: string) {
    this.router.navigateByUrl(pagename)
  }

  
  supportSteps = [
    {
      title: 'Find a creator',
      description: 'Locate a nearby healthcare professional for your needs.',
      icon: 'fi fi-rr-magnifying-glass-wave', // Bootstrap icon class
      color:'#00C7A7',
      bordercolor:'1px solid rgba(0, 199, 167,0.3)',
      bg:'rgba(0, 199, 167,0.1)',
      bcolor:'2px solid #00C7A7'
    },
    {
      title: 'Contact the creator',
      description: 'Get in touch with a doctor via call or chat.',
      icon: 'fi fi-rr-chat-bubble-call', // Bootstrap icon class
      color:'#1B9FF1',
      bordercolor:'1px solid rgba(27, 159, 241,0.3)',
      bg:'rgba(27, 159, 241,0.1)',
      bcolor:'2px solid #1B9FF1'
    },
    {
      title: 'Follow the steps',
      description: 'Get detailed guidance for your Life journey.',
      icon: 'fi fi-rr-subscription-user',
      color:'#E4323E',
      bordercolor:'1px solid rgba(228, 50, 62,0.3)',
      bg:'rgba(228, 50, 62,0.1)',
      bcolor:'2px solid #E4323E'
    },
    {
      title: 'Take back control',
      description: 'Regain control over your career with support.',
      icon: 'fi fi-rr-face-smile-hearts',
      color:'#872AD0',
      bordercolor:'1px solid rgba(135, 42, 208,0.3)',
      bg:'rgba(135, 42, 208,0.1)',
      bcolor:'2px solid #872AD0'
    },
  ];


  years: number = 0;
  projects: number = 0;
  clients: number = 0;


  ngOnInit(): void {
    this.animateValue('years', 0, 5, 3000);      // 5 years of experience
    this.animateValue('projects', 0, 130, 3000);  // 130 projects done
    this.animateValue('clients', 0, 100, 3000);   // 100 happy clients

    this.typeWriter();
  }

  animateValue(property: 'years' | 'projects' | 'clients', start: number, end: number, duration: number): void {
    const range = end - start;
    const stepTime = Math.abs(Math.floor(duration / range));
    let current = start;
    const increment = end > start ? 1 : -1;
    
    const timer = setInterval(() => {
      current += increment;
      this[property] = current;
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  }




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
