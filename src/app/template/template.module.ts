import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    TemplateComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    RouterModule
  ],
  exports:[
    TemplateComponent
  ]
})
export class TemplateModule { }
