import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contract } from 'src/app/models/Contract.model';
import { ContractService } from 'src/app/services/contract.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-contract-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-contract-modal.component.html',
  styleUrls: ['./edit-contract-modal.component.css']
})
export class EditContractModalComponent {
  @Input() contract!:Contract;

  @Output() contractUpdated = new EventEmitter<void>();

  constructor( private contractService: ContractService ){ }

  // aqui debe ir el metodo para hacer la peticion
  updateContract(){
    
    this.contractService.updateContract(this.contract).subscribe({
      next: async (response) => {
        Swal.fire('¡Éxito!', 'Contrato actualizado correctamente', 'success');

        // función Refresh        
        this.contractUpdated.emit();
      }, error: (e) => {
        Swal.fire('¡Error!', `No se pudo actualizar el Contrato: ${e.error.message}`, 'error');
      }
    })
  }
}
