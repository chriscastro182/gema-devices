import { Routes } from '@angular/router';
import { HomeComponent } from '../components/dashboard/home/home.component';
import { SmartHomeComponent } from '../components/dashboard/smart-home/smart-home.component';
import { AuthGuard } from '../guards/auth-guard.guard';



export const DashboardRoutes: Routes = [{
    path: '',
    children: [{
        path: 'home',
        component: HomeComponent
        },
        {
            path: 'smart-home',
            component: SmartHomeComponent,
            canActivate: [AuthGuard]
        }]
    }];