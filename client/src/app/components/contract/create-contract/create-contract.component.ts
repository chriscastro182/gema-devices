import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contract } from 'src/app/models/Contract.model';
import { AuthService } from 'src/app/services/auth.service';
import { ContractService } from 'src/app/services/contract.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent {
 
}
