import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MemberTypesComponent } from './pages/member-types/member-types.component';
import { MemberTypesInfoComponent } from './pages/member-types/member-types-info/member-types-info.component';
import { MemberTypesSelectorComponent } from './pages/member-types/member-types-selector/member-types-selector.component';
import { MemberTypesInfoLeftCardComponent } from './pages/member-types/member-types-info/member-types-info-left-card/member-types-info-left-card.component';
import { MemberTypesInfoRightCardComponent } from './pages/member-types/member-types-info/member-types-info-right-card/member-types-info-right-card.component';
//add members
import { MemberTypesAddComponent } from './pages/member-types-add/member-types-add.component';
import { AddTypeInfoComponent } from './pages/member-types-add/add-type-info/add-type-info.component';
import { AddTypeInfoLeftCardComponent } from './pages/member-types-add/add-type-info/add-type-info-left-card/add-type-info-left-card.component';
import { AddTypeInfoRightCardComponent } from './pages/member-types-add/add-type-info/add-type-info-right-card/add-type-info-right-card.component';
//edit member
import { MemberTypesEditComponent } from './pages/member-types-edit/member-types-edit.component';
import { EditTypeInfoComponent } from './pages/member-types-edit/edit-type-info/edit-type-info.component';
import { EditTypeInfoLeftComponent } from './pages/member-types-edit/edit-type-info/edit-type-info-left/edit-type-info-left.component';
import { EditTypeInfoRightComponent } from './pages/member-types-edit/edit-type-info/edit-type-info-right/edit-type-info-right.component';
//member list
import { MemberListComponent } from './pages/members/member-list/member-list.component';
import { MemberInfoComponent } from './pages/members/member-info/member-info.component';
import { MemberEditComponent } from './pages/members/member-edit/member-edit.component';
import { MemberAddComponent } from './pages/members/member-add/member-add.component';
import { MemberListCardComponent } from './pages/members/member-list/member-list-card/member-list-card.component';
import { MemberInfoCardComponent } from './pages/members/member-info/member-info-card/member-info-card.component';
import { MemberInfoCardCarComponent } from './pages/members/member-info/member-info-card/member-info-card-car/member-info-card-car.component';
import { MemberAddCardComponent } from './pages/members/member-add/member-add-card/member-add-card.component';
import { MemberEditCardComponent } from './pages/members/member-edit/member-edit-card/member-edit-card.component';
import { MemberAditCardCarComponent } from './pages/members/member-edit/member-edit-card/member-adit-card-car/member-adit-card-car.component';
import { MemberEditCardDocComponent } from './pages/members/member-edit/member-edit-card/member-edit-card-doc/member-edit-card-doc.component';
import { MemberAddCarComponent } from './pages/members/member-add-car/member-add-car.component';
import { MemberAddCarCardComponent } from './pages/members/member-add-car/member-add-car-card/member-add-car-card.component';
import { MemberEditCarComponent } from './pages/members/member-edit-car/member-edit-car.component';
import { MemberEditCarCardComponent } from './pages/members/member-edit-car/member-edit-car-card/member-edit-car-card.component';
import { AddScanComponent } from './pages/members/member-add/add-scan/add-scan.component';
import { AddScanCardComponent } from './pages/members/member-add/add-scan/add-scan-card/add-scan-card.component';
import { AddRoomAccessComponent } from './pages/members/member-add/add-room-access/add-room-access.component';
import { AddRoomAccessCardComponent } from './pages/members/member-add/add-room-access/add-room-access-card/add-room-access-card.component';
import { SystemAddPeopleComponent } from './pages/members/system-add-people/system-add-people.component';
import { SystemAddPeopleCardComponent } from './pages/members/system-add-people/system-add-people-card/system-add-people-card.component';
import { SystemAddPeopleShowComponent } from './pages/members/system-add-people-show/system-add-people-show.component';
import { SystemAddPeopleShowCardComponent } from './pages/members/system-add-people-show/system-add-people-show-card/system-add-people-show-card.component';
import { SystemAddPeopleRequestComponent } from './pages/members/system-add-people-request/system-add-people-request.component';
import { RequestCardLeftComponent } from './pages/members/system-add-people-request/request-card-left/request-card-left.component';
import { RequestCardRightComponent } from './pages/members/system-add-people-request/request-card-right/request-card-right.component';
import { RoomListComponent } from './pages/rooms/room/room-list/room-list.component';
import { RoomListCardSelectComponent } from './pages/rooms/room/room-list/room-list-card-select/room-list-card-select.component';
import { RoomListCardTableComponent } from './pages/rooms/room/room-list/room-list-card-table/room-list-card-table.component';
//menu
import { SidebarComponent } from './menu/sidebar/sidebar.component';
import { NavbarComponent } from './menu/navbar/navbar.component';

//rooms
import { RoomAddComponent } from './pages/rooms/room/room-add/room-add.component';
import { RoomAddCardComponent } from './pages/rooms/room/room-add/room-add-card/room-add-card.component';
import { RoomAddInfoComponent } from './pages/rooms/room/room-add/room-add-info/room-add-info.component';
import { RoomAddInfoCardLeftComponent } from './pages/rooms/room/room-add/room-add-info/room-add-info-card-left/room-add-info-card-left.component';
import { RoomAddInfoCardRightComponent } from './pages/rooms/room/room-add/room-add-info/room-add-info-card-right/room-add-info-card-right.component';
import { AddCardRightCurrentComponent } from './pages/rooms/room/room-add/room-add-info/room-add-info-card-right/add-card-right-current/add-card-right-current.component';
import { AddCardRightPreviousComponent } from './pages/rooms/room/room-add/room-add-info/room-add-info-card-right/add-card-right-previous/add-card-right-previous.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberTypesComponent,
    MemberTypesInfoComponent,
    MemberTypesSelectorComponent,
    MemberTypesInfoLeftCardComponent,
    MemberTypesInfoRightCardComponent,
    MemberTypesAddComponent,
    AddTypeInfoComponent,
    AddTypeInfoLeftCardComponent,
    AddTypeInfoRightCardComponent,
    MemberTypesEditComponent,
    EditTypeInfoComponent,
    EditTypeInfoLeftComponent,
    EditTypeInfoRightComponent,
    MemberListComponent,
    MemberInfoComponent,
    MemberEditComponent,
    MemberAddComponent,
    MemberListCardComponent,
    MemberInfoCardComponent,
    MemberInfoCardCarComponent,
    MemberAddCardComponent,
    MemberEditCardComponent,
    MemberAditCardCarComponent,
    MemberEditCardDocComponent,
    MemberAddCarComponent,
    MemberAddCarCardComponent,
    MemberEditCarComponent,
    MemberEditCarCardComponent,
    AddScanComponent,
    AddScanCardComponent,
    AddRoomAccessComponent,
    AddRoomAccessCardComponent,
    SystemAddPeopleComponent,
    SystemAddPeopleCardComponent,
    SystemAddPeopleShowComponent,
    SystemAddPeopleShowCardComponent,
    SystemAddPeopleRequestComponent,
    RequestCardLeftComponent,
    RequestCardRightComponent,
    RoomListComponent,
    RoomListCardSelectComponent,
    RoomListCardTableComponent,
    SidebarComponent,
    NavbarComponent,
    RoomAddComponent,
    RoomAddCardComponent,
    RoomAddInfoComponent,
    RoomAddInfoCardLeftComponent,
    RoomAddInfoCardRightComponent,
    AddCardRightCurrentComponent,
    AddCardRightPreviousComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}