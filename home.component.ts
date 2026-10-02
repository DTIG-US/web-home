import { Component } from '@angular/core';
import { CarouselComponent } from '../web-carousel/carousel.component';
import { PartnersComponent } from '../web-partner/partners.component';
import { DemoComponent } from '../web-handsani-demo/demo.component';
import { OfferingComponent } from '../web-offering/offering.component';

@Component({
  selector: 'app-home',
  imports: [CarouselComponent, PartnersComponent, DemoComponent, OfferingComponent],
  template: `
    <app-carousel></app-carousel>
    <app-partners></app-partners>
    <app-demo></app-demo>
    <app-offering></app-offering>
  `
})
export class HomeComponent {}
