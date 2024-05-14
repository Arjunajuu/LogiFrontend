import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { DashboardModuleRoutingModule } from './dashboard-module-routing.module';
import { DashboardModuleComponent } from './dashboard-module.component';


@NgModule({
  declarations: [
    DashboardModuleComponent
  ],
  imports: [
    CommonModule,
    DashboardModuleRoutingModule
  ],
  providers: [DatePipe],
})
export class DashboardModuleModule { }
