import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardRoutes } from './dashboard.routing';
import { HomeComponent } from '../components/dashboard/home/home.component';
import { SmartHomeComponent } from '../components/dashboard/smart-home/smart-home.component';



@NgModule({
  declarations: [HomeComponent, SmartHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
  ]
})
export class DashboardModule { }
