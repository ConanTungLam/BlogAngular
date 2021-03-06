import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerListComponent } from './manager-list/manager-list.component';
import { ManagerEditComponent } from './manager-edit/manager-edit.component';
import { ManagerAddComponent } from './manager-add/manager-add.component';
import { ManagerDeleteComponent } from './manager-delete/manager-delete.component';
import { MatSliderModule } from '@angular/material/slider';
import { MaterialCommonModule } from '../material-common/material-common.module';

@NgModule({
  declarations: [ManagerListComponent, ManagerEditComponent, ManagerAddComponent, ManagerDeleteComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    MatSliderModule,
    MaterialCommonModule
  ]
})
export class ManagerModule { }
