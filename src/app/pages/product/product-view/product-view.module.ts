import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductViewRoutingModule } from './product-view-routing.module';
import { ProductViewComponent } from './product-view.component';
import { ProductListModule } from '../product-list/product-list.module';
import { ProductHeaderModule } from '../product-header/product-header.module';


@NgModule({
  declarations: [
    ProductViewComponent
  ],
  imports: [
    CommonModule,
    ProductViewRoutingModule,
    ProductListModule,
    ProductHeaderModule
  ]
})
export class ProductViewModule { }
