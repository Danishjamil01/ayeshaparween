import { Component, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {



  testimonialCards = [
    {
      name: 'Lance Jarvis',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat, sapien vitae congue fringilla, sem eros consequat tellus.',
      imageUrl: 'https://via.placeholder.com/100',
      waveColor: 'green-wave'
    },
    {
      name: 'Ericka Lynda',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat, sapien vitae congue fringilla, sem eros consequat tellus.',
      imageUrl: 'https://via.placeholder.com/100',
      waveColor: 'purple-wave'
    },
    {
      name: 'Neil Wilford',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat, sapien vitae congue fringilla, sem eros consequat tellus.',
      imageUrl: 'https://via.placeholder.com/100',
      waveColor: 'blue-wave'
    }
  ];


  slides = [
    { m1: "“I was skeptical about using a brokerage comparison service at first. The comparison tools are comprehensive and easy to use.”", position: 'Project Manager', name: 'Danish Jamil', img: 'https://kitnew.moxcreative.com/fleu/wp-content/uploads/sites/13/2022/11/img_3.png' },
    { m1: "“I was skeptical about using a brokerage comparison service at first. The comparison tools are comprehensive and easy to use.”", position: 'Project Manager', name: 'Danish Jamil', img: 'https://kitnew.moxcreative.com/fleu/wp-content/uploads/sites/13/2022/11/img_3.png' },
    { m1: "“I was skeptical about using a brokerage comparison service at first. The comparison tools are comprehensive and easy to use.”", position: 'Project Manager', name: 'Danish Jamil', img: 'https://kitnew.moxcreative.com/fleu/wp-content/uploads/sites/13/2022/11/img_3.png' },
    { m1: "“I was skeptical about using a brokerage comparison service at first. The comparison tools are comprehensive and easy to use.”", position: 'Project Manager', name: 'Danish Jamil', img: 'https://kitnew.moxcreative.com/fleu/wp-content/uploads/sites/13/2022/11/img_3.png' },
  ];
  slideConfig =
    {
      "slidesToShow": 1,
      "slidesToScroll": 1,
      // autoplay: true,
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
