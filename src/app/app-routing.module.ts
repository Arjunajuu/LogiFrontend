import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { myGuardGuard } from './my-guard.guard';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./dashboard-module/dashboard-module.module').then(m => m.DashboardModuleModule), canActivate: [myGuardGuard]},
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: '',redirectTo: 'dashboard',pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 
