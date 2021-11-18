import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminListComponent } from '../admin-list/admin-list.component';
import { AdminShowInfoComponent } from '../admin-show-info/admin-show-info.component';
import { AdminAddComponent } from '../admin-add/admin-add.component';
import { AdminEditComponent } from '../admin-edit/admin-edit.component';
import { UsageManageComponent } from '../admin-management-usage/usage-manage/usage-manage.component';

const adminRoutes: Routes = [
  { path: 'admin/List', component: AdminListComponent },
  { path: 'admin/showInformation', component: AdminShowInfoComponent },
  { path: 'admin/addAdmin', component: AdminAddComponent },
  { path: 'admin/editAdmin', component: AdminEditComponent },
  { path: 'admin/usage-management', component: UsageManageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdminManagementRoutingModule {}
