import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerListComponent } from './manager-list/manager-list.component';
import { ManagerEditComponent } from './manager-edit/manager-edit.component';
import { ManagerDeleteComponent } from './manager-delete/manager-delete.component';


const routes: Routes = [
  { path: '', redirectTo: 'account', pathMatch: 'full' },
  { path: 'account', component: ManagerListComponent },
  { path: 'edit', component: ManagerEditComponent },
  { path: 'delete', component: ManagerDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
