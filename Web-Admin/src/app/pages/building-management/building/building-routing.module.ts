import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListBuildingComponent } from '../list-building/list-building.component';
import { AddBuildingComponent } from '../add-building/add-building.component';
import { EditBuildingComponent } from '../edit-building/edit-building.component';

const routesBuilding: Routes = [
  {
    path: 'building/list',
    component: ListBuildingComponent,
  },
  {
    path: 'building/add',
    component: AddBuildingComponent,
  },
  {
    path: 'building/edit',
    component: EditBuildingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routesBuilding)],
  exports: [RouterModule],
})
export class BuildingRoutingModule {}
