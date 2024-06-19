import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'add',loadChildren:()=>import('./add/add.module').then(m=>m.AddModule),canActivate: [AuthGuard]},
  {path:'home',loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }