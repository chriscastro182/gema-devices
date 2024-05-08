import { Routes } from '@angular/router';
import { UserIndexComponent } from '../components/user/user-index/user-index.component';
import { CreateUserComponent } from '../components/user/create-user/create-user.component';
import { UserComponent } from '../components/user/user/user.component';
//import { AuthGuard } from 'app/auth.guard';
// import { AdminGuard } from 'app/admin.guard';


export const UserRoutes: Routes = [{
    path: 'user',
    children: [{
        path: 'create',
        component: CreateUserComponent
    },{
        path: 'user-index',
        component: UserIndexComponent
    },{
        path: 'user',
        component: UserComponent
    }/* ,{
        path: 'user/users',
        component: UserIndexComponent,
        canActivate: [AuthGuard, AdminGuard]
    } */]
}];