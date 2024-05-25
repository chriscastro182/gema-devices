import { Routes } from '@angular/router';
import { ProfileComponent } from '../components/profile/profile/profile.component';
import { AuthGuard } from '../guards/auth-guard.guard';


export const ProfileRoutes: Routes = [{
    path: 'profile',
    children: [{
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
        }]
    }];