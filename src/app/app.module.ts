import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VmsComponent } from './vms/vms.component';
import { LinksComponent } from './links/links.component';
import { BrowsersComponent } from './browsers/browsers.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { VmsProviderService } from './services/vms-provider.service';
import { MacVmsComponent } from './vms/mac-vms.component';
import { ClipboardModule } from 'ngx-clipboard';
import { WorkFromHomeComponent } from './wfh/work-from-home.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { WfhUserDataComponent } from './wfh/wfh-user-data.component';

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
    BrowsersComponent,
    MacVmsComponent,
    WorkFromHomeComponent,
    WfhUserDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    ClipboardModule,
    FormsModule
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
