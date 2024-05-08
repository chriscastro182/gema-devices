import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserRoutes } from './user.routing';
import { UserIndexComponent } from '../components/user/user-index/user-index.component';
import { CreateUserComponent } from '../components/user/create-user/create-user.component';



@NgModule({
  declarations: [UserIndexComponent, CreateUserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
  ]
})
export class UserModule { }
