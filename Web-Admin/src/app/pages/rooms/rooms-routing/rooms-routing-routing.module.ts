import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoomListComponent } from '../room/room-list/room-list.component';
import { RoomAddComponent } from '../room/room-add/room-add.component';
import { RoomLayoutComponent } from '../room-type/room-layout/room-layout.component';
import { AddRoomtypeComponent } from '../room-type/add-roomtype/add-roomtype.component';
import { EditRoomtypeComponent } from '../room-type/edit-roomtype/edit-roomtype.component';
import { RoomEditComponent } from '../room/room-edit/room-edit.component';
import { RoomEditOwnerComponent } from '../room/room-edit/room-edit-owner/room-edit-owner.component';
import { RoomEditAccessComponent } from '../room/room-edit/room-edit-access/room-edit-access.component';

const roomRoutes: Routes = [
  {
    path: 'rooms/room-list',
    component: RoomListComponent,
  },
  {
    path: 'rooms/room-add',
    component: RoomAddComponent,
  },
  {
    path: 'rooms/Type-room',
    component: RoomLayoutComponent,
  },
  {
    path: 'rooms/add-Type-room',
    component: AddRoomtypeComponent,
  },
  {
    path: 'rooms/edit-Type-room',
    component: EditRoomtypeComponent,
  },
  {
    path: 'rooms/room-edit',
    component: RoomEditComponent,
  },
  {
    path: 'rooms/edit-owner',
    component: RoomEditOwnerComponent,
  },
  {
    path: 'rooms/edit-access-room',
    component: RoomEditAccessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(roomRoutes)],
  exports: [RouterModule],
})
export class RoomsRoutingRoutingModule {}
