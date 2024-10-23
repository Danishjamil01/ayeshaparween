import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Modal, Offcanvas } from 'bootstrap';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  isNavigatingToHome: boolean = false;
  isAboutClicked: boolean = false;

  constructor(private router: Router) {
    // Listen for routing events to check when the navigation to home component finishes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // After navigation to home, check if it should scroll to "About"
      if (event.url === '/home' && this.shouldScrollToAbout) {
        this.scrollToSection('about');
        this.shouldScrollToAbout = false; // Reset after scroll
      }
    });
  }
  shouldScrollToAbout: boolean = false;

  private sidebar: Offcanvas;

  routeTo(path: string): void {
    // if (path === 'about') {
    //   this.shouldScrollToAbout = true; 
    //   if (this.router.url === '/home') {

    //     this.scrollToSection('about');
    //   } else {
    //     // Navigate to home, then scroll to About section
    //     this.router.navigate(['/home']);
    //   }
    // } else if (path === 'home') {
    //   // Just navigate to home without scrolling to the About section
    //   this.shouldScrollToAbout = false;
    //   this.router.navigate(['/home']);
    // } else {
    //   // Navigate to other sections
    //   this.shouldScrollToAbout = false;
    //   this.router.navigate([`/${path}`]);
    // }
    this.router.navigateByUrl(path);
    this.sidebar.hide();
  }

  scrollToSection(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd) // Listen only to navigation end events
    ).subscribe(() => {
      window.scrollTo(0, 0); // Scroll to the top of the page
    });
  }


  isScrolled: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50; // Change to true if scrolled more than 50px
  }

  openSidebar() {
    const element = document.getElementById('sidebar');
    this.sidebar = new Offcanvas(element);
    this.sidebar.show();
  }
  closeSidebar() {
    if (!!this.sidebar) {
      this.sidebar.hide();
    }
  }

}
