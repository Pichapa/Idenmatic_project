import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminManagementRoutingModule } from './admin-management-routing.module';
import { AdminListComponent } from '../admin-list/admin-list.component';
import { CardAdminListComponent } from '../admin-list/card-admin-list/card-admin-list.component';
import { AdminShowInfoComponent } from '../admin-show-info/admin-show-info.component';
import { CardAdminShowInfoComponent } from '../admin-show-info/card-admin-show-info/card-admin-show-info.component';
import { AdminAddComponent } from '../admin-add/admin-add.component';
import { CardAdminAddComponent } from '../admin-add/card-admin-add/card-admin-add.component';
import { AdminEditComponent } from '../admin-edit/admin-edit.component';
import { CardAdminEditComponent } from '../admin-edit/card-admin-edit/card-admin-edit.component';
import { UsageManageComponent } from '../admin-management-usage/usage-manage/usage-manage.component';
import { CardUsageManageComponent } from '../admin-management-usage/usage-manage/card-usage-manage/card-usage-manage.component';
import { DoorManageComponent } from '../admin-management-usage/door-manage/door-manage.component';
import { SpaceManageComponent } from '../admin-management-usage/space-manage/space-manage.component';
import { RoomManageComponent } from '../admin-management-usage/room-manage/room-manage.component';
import { UserManageComponent } from '../admin-management-usage/user-manage/user-manage.component';
import { ParkingManageComponent } from '../admin-management-usage/parking-manage/parking-manage.component';
import { NotificationManageComponent } from '../admin-management-usage/notification-manage/notification-manage.component';
import { MainImageManageComponent } from '../admin-management-usage/main-image-manage/main-image-manage.component';
import { AdminManageComponent } from '../admin-management-usage/admin-manage/admin-manage.component';
import { HistoryManageComponent } from '../admin-management-usage/history-manage/history-manage.component';

@NgModule({
  declarations: [
    AdminListComponent,
    CardAdminListComponent,
    AdminShowInfoComponent,
    CardAdminShowInfoComponent,
    AdminAddComponent,
    CardAdminAddComponent,
    AdminEditComponent,
    CardAdminEditComponent,
    UsageManageComponent,
    CardUsageManageComponent,
    DoorManageComponent,
    SpaceManageComponent,
    RoomManageComponent,
    UserManageComponent,
    ParkingManageComponent,
    NotificationManageComponent,
    MainImageManageComponent,
    AdminManageComponent,
    HistoryManageComponent,
  ],
  imports: [CommonModule, AdminManagementRoutingModule],
})
export class AdminManagementModule {}
