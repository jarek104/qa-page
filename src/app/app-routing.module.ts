import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VmsComponent } from './vms/vms.component';
import { LinksComponent } from './links/links.component';
import { BrowsersComponent } from './browsers/browsers.component';

const routes: Routes = [
  { path: 'vms', component: VmsComponent},
  { path: 'cards', component: LinksComponent},
  { path: 'browsers', component: BrowsersComponent},
  { path: '' , redirectTo: '/vms', pathMatch: 'full'},
  { path: '**' , component: VmsComponent}
];

// , { useHash: true } add this after routes
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
