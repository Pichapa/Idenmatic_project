import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableBookingComponent } from '../time-date-table/table-booking/table-booking.component';
import { AddBookingComponent } from '../time-date-table/add-booking/add-booking.component';
import { EditBookingComponent } from '../time-date-table/edit-booking/edit-booking.component';
import { ListActivityComponent } from '../activity-area/list-activity/list-activity.component';
import { AddActivityComponent } from '../activity-area/add-activity/add-activity.component';
import { EditActivityComponent } from '../activity-area/edit-activity/edit-activity.component';

const areaRoutes: Routes = [
  { path: 'central-area/table', component: TableBookingComponent },
  { path: 'central-area/add-booking', component: AddBookingComponent },
  { path: 'central-area/edit-booking', component: EditBookingComponent },
  { path: 'central-area/central-area', component: ListActivityComponent },
  { path: 'central-area/add-type-area', component: AddActivityComponent },
  { path: 'central-area/edit-type-area', component: EditActivityComponent },
];

@NgModule({
  imports: [RouterModule.forChild(areaRoutes)],
  exports: [RouterModule],
})
export class CentralAreaRoutingModule {}
