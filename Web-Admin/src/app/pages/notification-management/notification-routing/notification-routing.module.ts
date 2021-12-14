import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingRoutingModule } from './notification-routing-routing.module';

import { NotificationListComponent } from '../notification-list/notification-list.component';
import { CardNotificationListComponent } from '../notification-list/card-notification-list/card-notification-list.component';

@NgModule({
  declarations: [NotificationListComponent, CardNotificationListComponent],
  imports: [CommonModule, NotificationRoutingRoutingModule],
})
export class NotificationRoutingModule {}
