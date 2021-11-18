import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CentralAreaRoutingModule } from './central-area-routing.module';

import { TableBookingComponent } from '../time-date-table/table-booking/table-booking.component';
import { CardTableBookingComponent } from '../time-date-table/table-booking/card-table-booking/card-table-booking.component';
import { CardSeletorBookingComponent } from '../time-date-table/table-booking/card-seletor-booking/card-seletor-booking.component';
import { AddBookingComponent } from '../time-date-table/add-booking/add-booking.component';
import { CardAddBookingComponent } from '../time-date-table/add-booking/card-add-booking/card-add-booking.component';
import { EditBookingComponent } from '../time-date-table/edit-booking/edit-booking.component';
import { CardEditBookingComponent } from '../time-date-table/edit-booking/card-edit-booking/card-edit-booking.component';
import { ListActivityComponent } from '../activity-area/list-activity/list-activity.component';
import { CardListActivityComponent } from '../activity-area/list-activity/card-list-activity/card-list-activity.component';
import { AddActivityComponent } from '../activity-area/add-activity/add-activity.component';
import { CardAddActivityComponent } from '../activity-area/add-activity/card-add-activity/card-add-activity.component';
import { EditActivityComponent } from '../activity-area/edit-activity/edit-activity.component';
import { CardEditActivityComponent } from '../activity-area/edit-activity/card-edit-activity/card-edit-activity.component';

@NgModule({
  declarations: [
    TableBookingComponent,
    CardTableBookingComponent,
    CardSeletorBookingComponent,
    AddBookingComponent,
    CardAddBookingComponent,
    EditBookingComponent,
    CardEditBookingComponent,
    ListActivityComponent,
    CardListActivityComponent,
    AddActivityComponent,
    CardAddActivityComponent,
    EditActivityComponent,
    CardEditActivityComponent,
  ],
  imports: [CommonModule, CentralAreaRoutingModule],
})
export class CentralAreaModule {}
