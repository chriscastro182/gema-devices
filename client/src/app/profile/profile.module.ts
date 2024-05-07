import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileRoutes } from './profile.routing';
import { ProfileComponent } from '../components/profile/profile/profile.component';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ProfileRoutes),
  ]
})
export class ProfileModule { }
