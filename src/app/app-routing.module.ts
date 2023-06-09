import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: "template",
    loadChildren: () => import("./template/template.module").then(m => m.TemplateModule)
  },
  {
    path: "login",
    loadChildren:() => import("./login/login.module").then(m => m.LoginModule)
  }
  // {
  //   path: "login", component: LoginComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
