import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VmsComponent } from './vms/vms.component';
import { LinksComponent } from './links/links.component';
import { LinksEditComponent } from './links/links-edit.component';
import { VmsEditComponent } from './vms/vms-edit.component';
import { BrowsersEditComponent } from './browsers/browsers-edit.component';
import { BrowsersComponent } from './browsers/browsers.component';

const routes: Routes = [
  { path: 'vms', component: VmsComponent},
  { path: 'vmsedit', component: VmsEditComponent},
  { path: 'links', component: LinksComponent},
  { path: 'linksedit', component: LinksEditComponent},
  { path: 'browsers', component: BrowsersComponent},
  { path: 'browsersedit', component: BrowsersEditComponent},
  { path: '' , redirectTo: '/vms', pathMatch: 'full'},
  { path: '**' , component: VmsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
