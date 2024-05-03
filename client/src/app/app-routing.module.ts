import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/components/auth/login/login.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { SmartHomeComponent } from './components/dashboard/smart-home/smart-home.component';
import { UserIndexComponent } from './components/user/user-index/user-index.component';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { CreateUserComponent } from './components/user/create-user/create-user.component';

const routes: Routes = [
  // Autenticacion
  { path: 'login', component: LoginComponent },
  // Dashboards
  { path: 'home', component: HomeComponent },
  { path: 'smart-home', component: SmartHomeComponent },
  // Usuarios
  { path: 'users', component: UserIndexComponent },
  { path: 'create-users', component: CreateUserComponent },
  { path: 'profile', component: ProfileComponent },

  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
