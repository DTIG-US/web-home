import { Component } from '@angular/core';
import { CarouselComponent } from '../web-carousel/carousel.component';
import { PartnersComponent } from '../web-partner/partners.component';
import { OfferingComponent } from '../web-offering/offering.component';

/**
 * Root landing page component providing the main presentation layout.
 * Assembles the marketing carousel, partner listings, and offering showcases.
 */
@Component({
  selector: 'app-home',
  imports: [CarouselComponent, PartnersComponent, OfferingComponent],
  template: `
    <app-carousel></app-carousel>
    <app-partners></app-partners>
    <app-offering></app-offering>
  `
})
export class HomeComponent {}

