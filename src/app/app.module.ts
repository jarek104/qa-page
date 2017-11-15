import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VmsComponent } from './vms/vms.component';
import { LinksComponent } from './links/links.component';
import { VmsEditComponent } from './vms/vms-edit.component';
import { LinksEditComponent } from './links/links-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    VmsComponent,
    LinksComponent,
    VmsEditComponent,
    LinksEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
