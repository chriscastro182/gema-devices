import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContractRoutes } from './contract.routing';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../guards/auth-guard.guard';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ContractRoutes),
  ],
  providers: [AuthService, AuthGuard]
})
export class ContractModule { }
