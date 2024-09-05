import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contract } from 'src/app/models/Contract.model';
import { AuthService } from 'src/app/services/auth.service';
import { ContractService } from 'src/app/services/contract.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-contract-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-contract-modal.component.html',
  styleUrls: ['./create-contract-modal.component.css']
})
export class CreateContractModalComponent {
  contrato : Contract = {folio:'', phone: '', expiresDate:'', device:[], user:'6656a6c6d37aab3044b6d7f4'};

  @Output() contractsUpdated = new EventEmitter<void>();

  
  constructor(private contractService:ContractService, private authService:AuthService){ }

  ngOnInit(){
  }

  async createUser(){
    //console.log(this.usuario)

    this.contractService.createContract(this.contrato).subscribe({
      next: async (response) => {
        Swal.fire('¡Éxito!', 'Contrato creado correctamente', 'success');

        // función Refresh        
        this.contractsUpdated.emit();
      }, error: (e) => {
        Swal.fire('¡Error!', `No se pudo crear el Contrato: ${e.error.message}`, 'error');
      }
    })
  }
}
