import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from "./core/guards/auth.guard";
import {BaseComponent} from "./modules/base.component";

const routes: Routes = [
  {
    path: '', component: BaseComponent, canActivate: [AuthGuard],
    children: [],
  },
  {path: '', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
