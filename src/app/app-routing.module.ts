import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeimgsliderComponent } from './homeimgslider/homeimgslider.component';
import { LoginadminComponent } from "./loginadmin/loginadmin.component";
import { RegisteradminComponent } from "./registeradmin/registeradmin.component";


const routes: Routes = [
  {path:'loginadmin',component:LoginadminComponent},
  {path:'registeradmin',component:RegisteradminComponent},
  {path:'',component:HomeimgsliderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
