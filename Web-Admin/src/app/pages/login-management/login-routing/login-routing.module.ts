import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingRoutingModule } from './login-routing-routing.module';
import { LoginAdminComponent } from '../login-admin/login-admin.component';

@NgModule({
  declarations: [LoginAdminComponent],
  imports: [CommonModule, LoginRoutingRoutingModule],
})
export class LoginRoutingModule {}
