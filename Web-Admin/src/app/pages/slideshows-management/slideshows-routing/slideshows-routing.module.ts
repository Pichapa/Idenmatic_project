import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlideshowsRoutingRoutingModule } from './slideshows-routing-routing.module';
import { SlideshowsComponent } from '../slideshows/slideshows.component';
import { CardSlideshowsComponent } from '../slideshows/card-slideshows/card-slideshows.component';

@NgModule({
  declarations: [SlideshowsComponent, CardSlideshowsComponent],
  imports: [CommonModule, SlideshowsRoutingRoutingModule],
})
export class SlideshowsRoutingModule {}
