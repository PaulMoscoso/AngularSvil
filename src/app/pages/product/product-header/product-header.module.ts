import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductHeaderRoutingModule } from './product-header-routing.module';
import { ProductHeaderComponent } from './product-header.component';


@NgModule({
  declarations: [
    ProductHeaderComponent
  ],
  imports: [
    CommonModule,
    ProductHeaderRoutingModule
  ],
  exports: [
    ProductHeaderComponent
  ]
})
export class ProductHeaderModule { }
