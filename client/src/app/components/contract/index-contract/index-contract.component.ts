import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contract } from 'src/app/models/Contract.model';
import { ContractService } from 'src/app/services/contract.service';
import { CreateContractModalComponent } from '../create-contract-modal/create-contract-modal.component';
import { InfoContractModalComponent } from "../info-contract-modal/info-contract-modal.component";
import { EditContractModalComponent } from "../edit-contract-modal/edit-contract-modal.component";

@Component({
  selector: 'app-index-contract',
  standalone: true,
  imports: [CommonModule, CreateContractModalComponent, InfoContractModalComponent, EditContractModalComponent],
  templateUrl: './index-contract.component.html',
  styleUrls: ['./index-contract.component.css']
})
export class IndexContractComponent {
  Contracts!: Observable<any[]>;
  Contract:Contract = {folio:'', device: [], phone:'', user:'', expiresDate:''};

  constructor(private ContractService:ContractService){
    
  }

  async ngOnInit(){
    this.Contracts = this.ContractService.getContracts();

    this.Contracts.subscribe(data => console.log(data));
  } 
  
  onContractsUpdated(){
    this.Contracts = this.ContractService.getContracts();
  }
  openInfoModal(_id : string | undefined){
    if (_id) {
      this.Contracts.subscribe(
        r => this.Contract = r.find(u=>u._id == _id)
      );      
    }
  }
  openEditModal(_id : string | undefined){
    if (_id) {
      this.Contracts.subscribe(
        u =>  this.Contract = u.find(u=>u._id == _id)
      );
      console.log(this.Contract)
    }
  }
}
