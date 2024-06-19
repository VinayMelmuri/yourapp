import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './component/add/add.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {path:'component',loadChildren:()=>import('./component/component.module').then((m)=>m.ComponentModule)},
  { path: '', redirectTo: '/component/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/component/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
