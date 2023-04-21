import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template.component';

const routes: Routes = [
  {
    path: "", component: TemplateComponent,
    children:[
      {
        path: "prodotto", 
        loadChildren: () => import("../pages/product/product-view/product-view.module").then(m => m.ProductViewModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
