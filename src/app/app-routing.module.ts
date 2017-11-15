import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { VmsComponent } from './vms/vms.component';
import { LinksComponent } from './links/links.component';

const routes: Routes = [
  { path: 'vms', component: VmsComponent},
  { path: 'links', component: LinksComponent}
];
=======

const routes: Routes = [];
>>>>>>> 005769d10651f3644d7a44d8b7c5072b0f8a6f80

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
