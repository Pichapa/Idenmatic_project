import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddPersonTypeComponent } from './components/add-person-type/add-person-type.component';
import { PersonTypeComponent } from './components/person-type/person-type.component';

const routes: Routes = [
  {
    path: 'type_person',
    component: PersonTypeComponent,
  },
  {
    path: 'add_person',
    component: AddPersonTypeComponent,
  },
  {
    path: '',
    redirectTo: 'type_person',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
