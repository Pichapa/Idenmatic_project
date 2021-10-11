import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MemberListComponent } from './pages/members/member-list/member-list.component';
import { MemberInfoComponent } from './pages/members/member-info/member-info.component';
import { MemberEditComponent } from './pages/members/member-edit/member-edit.component';
import { MemberAddComponent } from './pages/members/member-add/member-add.component';
import { AddScanComponent } from './pages/members/member-add/add-scan/add-scan.component';
import { AddRoomAccessComponent } from './pages/members/member-add/add-room-access/add-room-access.component';
import { MemberAddCarComponent } from './pages/members/member-add-car/member-add-car.component';
import { MemberEditCarComponent } from './pages/members/member-edit-car/member-edit-car.component';
import { MemberTypesComponent } from './pages/member-types/member-types.component';
import { MemberTypesAddComponent } from './pages/member-types-add/member-types-add.component';
import { MemberTypesEditComponent } from './pages/member-types-edit/member-types-edit.component';
import { SystemAddPeopleComponent } from './pages/members/system-add-people/system-add-people.component';
import { SystemAddPeopleShowComponent } from './pages/members/system-add-people-show/system-add-people-show.component';
import { SystemAddPeopleRequestComponent } from './pages/members/system-add-people-request/system-add-people-request.component';
import { RoomListComponent } from './pages/rooms/room/room-list/room-list.component';
import { RoomAddComponent } from './pages/rooms/room/room-add/room-add.component';
import { RoomAddInfoComponent } from './pages/rooms/room/room-add/room-add-info/room-add-info.component';

const routes: Routes = [
  {
    path: 'members/all-members',
    component: MemberListComponent,
  },
  {
    path: 'members/show-members',
    component: MemberInfoComponent,
  },
  {
    path: 'members/edit-members',
    component: MemberEditComponent,
  },
  {
    path: 'members/add-members',
    component: MemberAddComponent,
  },
  {
    path: 'members/add-scan',
    component: AddScanComponent,
  },
  {
    path: 'members/add-cars',
    component: MemberAddCarComponent,
  },
  {
    path: 'members/add-access',
    component: AddRoomAccessComponent,
  },
  {
    path: 'members/edit-cars',
    component: MemberEditCarComponent,
  },
  {
    path: 'members/types',
    component: MemberTypesComponent,
  },
  {
    path: 'members/add',
    component: MemberTypesAddComponent,
  },
  {
    path: 'members/edit',
    component: MemberTypesEditComponent,
  },
  {
    path: 'members/approve-people',
    component: SystemAddPeopleComponent,
  },
  {
    path: 'members/approve-people-show',
    component: SystemAddPeopleShowComponent,
  },
  {
    path: 'members/approve-people-request',
    component: SystemAddPeopleRequestComponent,
  },
  {
    path: '',
    redirectTo: 'members/all-members',
    pathMatch: 'full',
  },
  //Rooms
  {
    path: 'rooms/room-list',
    component: RoomListComponent,
  },
  {
    path: 'rooms/room-add',
    component: RoomAddComponent,
  },
  {
    path: 'rooms/room-add-info',
    component: RoomAddInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
