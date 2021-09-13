import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPersonTypeComponent } from './components/add-person-type/add-person-type.component';
import { PersonTypeComponent } from './components/person-type/person-type.component';

@NgModule({
  declarations: [AppComponent, AddPersonTypeComponent, PersonTypeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
