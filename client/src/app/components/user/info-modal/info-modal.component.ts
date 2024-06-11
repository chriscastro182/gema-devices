import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User.model';

@Component({
  selector: 'app-info-modal',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.css']
})
export class InfoModalComponent {
  @Input() usuario : User | undefined;
  constructor(){}

  ngOnInit(){
    console.log("Usuario desde el hijo: ", this.usuario)
  }

}
