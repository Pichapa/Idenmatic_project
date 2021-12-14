import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SlideshowsComponent } from '../slideshows/slideshows.component';

const routes: Routes = [{ path: 'slideShows', component: SlideshowsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlideshowsRoutingRoutingModule {}
