import { Component } from '@angular/core';
import { CarouselComponent } from '../web-carousel/carousel.component';
import { PartnersComponent } from '../web-partner/partners.component';
import { DemoComponent } from '../web-handsani-demo';
import { OfferingComponent } from '../web-offering/offering.component';

@Component({
  selector: 'app-home',
  imports: [CarouselComponent, DemoComponent, PartnersComponent, OfferingComponent],
  template: `
    <app-carousel></app-carousel>
    <app-demo></app-demo>
    <app-partners></app-partners>
    <app-offering></app-offering>
  `
})
export class HomeComponent {}
