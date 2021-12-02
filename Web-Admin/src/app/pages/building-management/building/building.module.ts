import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildingRoutingModule } from './building-routing.module';

import { ListBuildingComponent } from '../list-building/list-building.component';
import { CardListBuildingComponent } from '../list-building/card-list-building/card-list-building.component';
import { AddBuildingComponent } from '../add-building/add-building.component';
import { CardAddBuildingComponent } from '../add-building/card-add-building/card-add-building.component';
import { EditBuildingComponent } from '../edit-building/edit-building.component';
import { CardEditBuildingComponent } from '../edit-building/card-edit-building/card-edit-building.component';

@NgModule({
  declarations: [
    ListBuildingComponent,
    CardListBuildingComponent,
    AddBuildingComponent,
    CardAddBuildingComponent,
    EditBuildingComponent,
    CardEditBuildingComponent,
  ],
  imports: [CommonModule, BuildingRoutingModule],
})
export class BuildingModule {}
