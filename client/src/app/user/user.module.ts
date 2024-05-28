import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserRoutes } from './user.routing';
import { UserIndexComponent } from '../components/user/user-index/user-index.component';
import { CreateUserComponent } from '../components/user/create-user/create-user.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../guards/auth-guard.guard';



@NgModule({
  declarations: [UserIndexComponent, CreateUserComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(UserRoutes),
  ],
  providers: [AuthService, AuthGuard]
})
export class UserModule { }
