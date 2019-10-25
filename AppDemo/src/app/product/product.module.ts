import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialCommonModule } from '../material-common/material-common.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

//install npm install ngx-pagination --save
import { NgxPaginationModule } from 'ngx-pagination';
// search -- npm i ng2-search-filter --save
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    ProductListComponent, 
    ProductAddComponent, 
    ProductEditComponent, 
    ProductDeleteComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialCommonModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    SweetAlert2Module.forRoot()
    ],
 

  
})
export class ProductModule { }
