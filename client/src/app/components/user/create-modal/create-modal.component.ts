import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from 'src/app/models/User.model';

@Component({
  selector: 'app-create-modal',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.css']
})
export class CreateModalComponent {
  @Input() usuario : User = {name:'', lastname: '', email:'', roles:[{rol:'',permissions:[]}]};
  constructor(){}

  ngOnInit(){
    console.log("Usuario desde el hijo: ", this.usuario)
  }
}
