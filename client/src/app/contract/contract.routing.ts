import { Routes } from '@angular/router';
import { CreateContractComponent } from '../components/contract/create-contract/create-contract.component';
import { AuthGuard } from '../guards/auth-guard.guard';
import { IndexContractComponent } from '../components/contract/index-contract/index-contract.component';

export const ContractRoutes: Routes = [{
    path: 'contract',
    children: [{
        path: 'create',
        component: CreateContractComponent,
        canActivate: [AuthGuard]
    },{
        path: 'index',
        component: IndexContractComponent,
        canActivate: [AuthGuard]
    },{
        path: '',
        component: IndexContractComponent
    }]
}];