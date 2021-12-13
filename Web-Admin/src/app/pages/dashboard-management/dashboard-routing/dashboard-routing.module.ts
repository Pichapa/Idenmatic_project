import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingRoutingModule } from './dashboard-routing-routing.module';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { ChartCardComponent } from '../dashboard/chart-card/chart-card.component';
import { ApprovalTableCardComponent } from '../dashboard/approval-table-card/approval-table-card.component';
import { PasserTableCardComponent } from '../dashboard/passer-table-card/passer-table-card.component';
import { ShowInformationComponent } from '../show-information/show-information.component';
import { CardShowInformationComponent } from '../show-information/card-show-information/card-show-information.component';
import { RequestMoreInfoComponent } from '../request-more-info/request-more-info.component';
import { CardRequestMoreComponent } from '../request-more-info/card-request-more/card-request-more.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ChartCardComponent,
    ApprovalTableCardComponent,
    PasserTableCardComponent,
    ShowInformationComponent,
    CardShowInformationComponent,
    RequestMoreInfoComponent,
    CardRequestMoreComponent,
  ],
  imports: [CommonModule, DashboardRoutingRoutingModule],
})
export class DashboardRoutingModule {}
