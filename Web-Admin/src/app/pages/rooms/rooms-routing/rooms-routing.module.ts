import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingRoutingModule } from './rooms-routing-routing.module';

import { RoomAddComponent } from '../room/room-add/room-add.component';
import { RoomAddCardComponent } from '../room/room-add/room-add-card/room-add-card.component';
import { RoomLayoutComponent } from '../room-type/room-layout/room-layout.component';
import { RoomLayoutCardComponent } from '../room-type/room-layout/room-layout-card/room-layout-card.component';
import { AddRoomtypeComponent } from '../room-type/add-roomtype/add-roomtype.component';
import { AddRoomtypeCardComponent } from '../room-type/add-roomtype/add-roomtype-card/add-roomtype-card.component';
import { EditRoomtypeComponent } from '../room-type/edit-roomtype/edit-roomtype.component';
import { EditRoomtypeCardComponent } from '../room-type/edit-roomtype/edit-roomtype-card/edit-roomtype-card.component';
import { RoomEditComponent } from '../room/room-edit/room-edit.component';
import { CardLeftInfoEditComponent } from '../room/room-edit/room-edit-info/card-left-info-edit/card-left-info-edit.component';
import { CardRightInfoEditComponent } from '../room/room-edit/room-edit-info/card-right-info-edit/card-right-info-edit.component';
import { RoomEditAccessComponent } from '../room/room-edit/room-edit-access/room-edit-access.component';
import { CardEditAccessComponent } from '../room/room-edit/room-edit-access/card-edit-access/card-edit-access.component';
import { EditCardRightCurrentComponent } from '../room/room-edit/room-edit-info/card-right-info-edit/edit-card-right-current/edit-card-right-current.component';
import { EditCardRightPreviousComponent } from '../room/room-edit/room-edit-info/card-right-info-edit/edit-card-right-previous/edit-card-right-previous.component';
import { RoomEditOwnerComponent } from '../room/room-edit/room-edit-owner/room-edit-owner.component';
import { CardEditOwnerComponent } from '../room/room-edit/room-edit-owner/card-edit-owner/card-edit-owner.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RoomAddComponent,
    RoomAddCardComponent,
    RoomLayoutComponent,
    RoomLayoutCardComponent,
    AddRoomtypeComponent,
    AddRoomtypeCardComponent,
    EditRoomtypeComponent,
    EditRoomtypeCardComponent,
    RoomEditComponent,
    CardLeftInfoEditComponent,
    CardRightInfoEditComponent,
    RoomEditAccessComponent,
    CardEditAccessComponent,
    EditCardRightCurrentComponent,
    EditCardRightPreviousComponent,
    RoomEditOwnerComponent,
    CardEditOwnerComponent,
  ],
  imports: [CommonModule, FormsModule, RoomsRoutingRoutingModule],
})
export class RoomsRoutingModule {}
