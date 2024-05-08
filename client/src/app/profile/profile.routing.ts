import { Routes } from '@angular/router';
import { ProfileComponent } from '../components/profile/profile/profile.component';


export const ProfileRoutes: Routes = [{
    path: 'profile',
    children: [{
        path: 'profile',
        component: ProfileComponent
        }]
    }];