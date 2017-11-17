import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VmsComponent } from './vms/vms.component';
import { LinksComponent } from './links/links.component';
import { VmsEditComponent } from './vms/vms-edit.component';
import { LinksEditComponent } from './links/links-edit.component';
import { VmsService } from './services/vms-service';
import { BrowsersComponent } from './browsers/browsers.component';
import { BrowsersEditComponent } from './browsers/browsers-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDB9ZpAnBy6rwA7-7VpvqxhBnV06qGaqx0',
  authDomain: 'qa-page-38d95.firebaseapp.com',
  databaseURL: 'https://qa-page-38d95.firebaseio.com',
  projectId: 'qa-page-38d95',
  storageBucket: 'qa-page-38d95.appspot.com',
  messagingSenderId: '891773206618'
};

@NgModule({
  declarations: [
    AppComponent,
    VmsComponent,
    LinksComponent,
    VmsEditComponent,
    LinksEditComponent,
    BrowsersComponent,
    BrowsersEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [VmsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
