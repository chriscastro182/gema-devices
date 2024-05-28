import { Routes } from '@angular/router';
import { LoginComponent } from '../components/auth/login/login.component';
import { RegisterComponent } from '../components/auth/register/register.component';
//import { AuthGuard } from 'app/auth.guard';
// import { AdminGuard } from 'app/admin.guard';


export const AuthRoutes: Routes = [{
    path: 'auth',
    children: [{
        path: 'login',
        component: LoginComponent
    },{
        path: 'register',
        component: RegisterComponent
    }/* ,{
        path: 'user/users',
        component: UserIndexComponent,
        canActivate: [AuthGuard, AdminGuard]
    } */]
}];