import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RocketListComponent} from "./component/rocket-list/rocket-list.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: RocketListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
