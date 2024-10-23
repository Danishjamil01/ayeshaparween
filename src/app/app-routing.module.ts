import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { BlogComponent } from './component/blog/blog.component';
import { ContactComponent } from './component/contact/contact.component';
import { HeroComponent } from './component/hero/hero.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { ProductsComponent } from './component/products/products.component';
import { ServicesComponent } from './component/services/services.component';
import { TestimonialsComponent } from './component/testimonials/testimonials.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HeroComponent },
  // { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'testimonial', component: TestimonialsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Restore the scroll position
    anchorScrolling: 'enabled',           // Enable fragment navigation
    scrollOffset: [0, 64]                 // Optional: adjust scroll offset (e.g., for fixed headers)
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
