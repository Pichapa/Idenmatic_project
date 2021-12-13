import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { ShowInformationComponent } from '../show-information/show-information.component';
import { RequestMoreInfoComponent } from '../request-more-info/request-more-info.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/Information', component: ShowInformationComponent },
  {
    path: 'dashboard/Request-Information',
    component: RequestMoreInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingRoutingModule {}
