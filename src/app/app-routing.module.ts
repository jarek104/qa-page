import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VmsComponent } from './vms/vms.component';
import { LinksComponent } from './links/links.component';

const routes: Routes = [
  { path: 'vms', component: VmsComponent},
  { path: 'links', component: LinksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
