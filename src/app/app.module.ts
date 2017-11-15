import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { VmsComponent } from './vms/vms.component';
import { LinksComponent } from './links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    VmsComponent,
    LinksComponent
=======

@NgModule({
  declarations: [
    AppComponent
>>>>>>> 005769d10651f3644d7a44d8b7c5072b0f8a6f80
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
