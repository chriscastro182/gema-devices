import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './components/templates/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './components/templates/admin-layout/admin-layout.component';

export const AppRoutes: Routes = [{
    
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full',
    },{
        path: '',
        component: AdminLayoutComponent,
        children: [{
            path: '',
            loadChildren: () => import('./user/user.module').then(x=>x.UserModule)
        }/* ,{
            path: '',
            loadChildren: () => import('./orders/orders.module').then(x=>x.OrdersModule)
        },{
            path: '',
            loadChildren: () => import('./catalogos/catalogos.module').then(x=>x.CatalogosModule)
        } */]
        },{
            path: '',
            component: AuthLayoutComponent,
            children: [{
                path: '',
                loadChildren: () => import('./dashboard/dashboard.module').then(x=>x.DashboardModule)
            },{
                path: '',
                loadChildren: () => import('./profile/profile.module').then(x=>x.ProfileModule)
            }]
        },{
            path: '',
            children: [{
                path: '',
                loadChildren: () => import('./auth/auth.module').then(x=>x.AuthModule)
            }]
        }
];