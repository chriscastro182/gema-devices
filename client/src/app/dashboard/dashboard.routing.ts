import { Routes } from '@angular/router';
import { HomeComponent } from '../components/dashboard/home/home.component';
import { SmartHomeComponent } from '../components/dashboard/smart-home/smart-home.component';



export const DashboardRoutes: Routes = [{
    path: '',
    children: [{
        path: 'home',
        component: HomeComponent
        },
        {
            path: 'smart-home',
            component: SmartHomeComponent
        }]
    }];