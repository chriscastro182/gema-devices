import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Contract } from 'src/app/models/Contract.model';

@Component({
  selector: 'app-info-contract-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-contract-modal.component.html',
  styleUrls: ['./info-contract-modal.component.css']
})
export class InfoContractModalComponent {
  @Input() contract : Contract | undefined;

  constructor(){}
}
