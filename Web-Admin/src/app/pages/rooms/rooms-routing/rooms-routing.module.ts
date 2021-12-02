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

//owner
import { OwnerManageComponent } from '../owner/owner-manage/owner-manage.component';
import { OwnerManageCardComponent } from '../owner/owner-manage/owner-manage-card/owner-manage-card.component';
import { OwnerManageSelectorComponent } from '../owner/owner-manage/owner-manage-selector/owner-manage-selector.component';
import { OwnerCardLeftComponent } from '../owner/owner-manage/owner-manage-card/owner-card-left/owner-card-left.component';
import { OwnerCardRightComponent } from '../owner/owner-manage/owner-manage-card/owner-card-right/owner-card-right.component';

import { OwnerAddComponent } from '../owner/owner-add/owner-add.component';
import { OwnerAddCardComponent } from '../owner/owner-add/owner-add-card/owner-add-card.component';
import { AddCardLeftComponent } from '../owner/owner-add/owner-add-card/add-card-left/add-card-left.component';
import { AddCardRightComponent } from '../owner/owner-add/owner-add-card/add-card-right/add-card-right.component';

import { OwnerEditComponent } from '../owner/owner-edit/owner-edit.component';
import { OwnerEditCardComponent } from '../owner/owner-edit/owner-edit-card/owner-edit-card.component';
import { EditCardLeftComponent } from '../owner/owner-edit/owner-edit-card/edit-card-left/edit-card-left.component';
import { EditCardRightComponent } from '../owner/owner-edit/owner-edit-card/edit-card-right/edit-card-right.component';

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
    OwnerManageComponent,
    OwnerManageCardComponent,
    OwnerManageSelectorComponent,
    OwnerCardLeftComponent,
    OwnerCardRightComponent,
    OwnerAddComponent,
    OwnerAddCardComponent,
    AddCardLeftComponent,
    AddCardRightComponent,
    OwnerEditComponent,
    OwnerEditCardComponent,
    EditCardLeftComponent,
    EditCardRightComponent,
  ],
  imports: [CommonModule, FormsModule, RoomsRoutingRoutingModule],
})
export class RoomsRoutingModule {}
