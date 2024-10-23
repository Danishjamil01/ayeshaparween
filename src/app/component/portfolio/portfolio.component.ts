import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {



  education = [
    {
      institution: 'Rajshahi Polytechnic Institute',
      years: '2011-2012',
      description: 'Lorem ipsum dolor sit amese adipiscing elit. Donec feugiat a fringilla sed bibendum.',
      course: 'Diploma In Computer Eng.'
    },
    {
      institution: 'Varendra University',
      years: '2013-2017',
      description: 'Lorem ipsum dolor sit amese adipiscing elit. Donec feugiat a fringilla sed bibendum.',
      course: 'BSC in CSE'
    },
    {
      institution: 'Rajshahi University',
      years: '2017-2021',
      description: 'Lorem ipsum dolor sit amese adipiscing elit. Donec feugiat a fringilla sed bibendum.',
      course: 'Programming'
    }
  ];

  experiences = [
    {
      company: 'Code Astrology',
      years: '2011-2012',
      description: 'Lorem ipsum dolor sit amese adipiscing elit. Donec feugiat a fringilla sed bibendum.',
      role: 'Internship'
    },
    {
      company: 'Zakir Soft',
      years: '2011-2012',
      description: 'Lorem ipsum dolor sit amese adipiscing elit. Donec feugiat a fringilla sed bibendum.',
      role: 'UI/UX Designer'
    },
    {
      company: 'DevignEdge',
      years: '2011-2012',
      description: 'Lorem ipsum dolor sit amese adipiscing elit. Donec feugiat a fringilla sed bibendum.',
      role: 'Product Designer'
    }
  ];


  selectedCategory: string = 'All';

  works = [
    { title: 'Project 1', category: 'Digital Creator', image: 'assets/images/portfolio/digitalcreator/1.avif' },
    { title: 'Project 2', category: 'Digital Creator', image: 'assets/images/portfolio/digitalcreator/2.avif' },
    { title: 'Project 3', category: 'Digital Creator', image: 'assets/images/portfolio/digitalcreator/3.avif' },
    { title: 'Project 4', category: 'Digital Creator', image: 'assets/images/portfolio/digitalcreator/4.webp' },
    { title: 'Project 5', category: 'Digital Creator', image: 'assets/images/portfolio/digitalcreator/5.avif' },
    { title: 'Project 6', category: 'Digital Creator', image: 'assets/images/portfolio/digitalcreator/6.avif' },

    { title: 'Project 7', category: 'Content Creation', image: 'assets/images/portfolio/contentcreation/1.avif' },
    { title: 'Project 8', category: 'Content Creation', image: 'assets/images/portfolio/contentcreation/2.avif' },
    { title: 'Project 9', category: 'Content Creation', image: 'assets/images/portfolio/contentcreation/3.avif' },
    { title: 'Project 10', category: 'Content Creation', image: 'assets/images/portfolio/contentcreation/4.avif' },

    { title: 'Project 11', category: 'Graphic Design', image: 'assets/images/portfolio/graphicdesign/1.avif' },
    { title: 'Project 12', category: 'Graphic Design', image: 'assets/images/portfolio/graphicdesign/2.avif' },
    { title: 'Project 13', category: 'Graphic Design', image: 'assets/images/portfolio/graphicdesign/3.avif' },
    { title: 'Project 14', category: 'Graphic Design', image: 'assets/images/portfolio/graphicdesign/4.avif' },

    // Add more items as needed
  ];

  filteredWorks = this.works;

  filterWorks(category: string) {
    this.selectedCategory = category;
    this.filteredWorks = category === 'All' ? this.works : this.works.filter(work => work.category === category);
  }
}
