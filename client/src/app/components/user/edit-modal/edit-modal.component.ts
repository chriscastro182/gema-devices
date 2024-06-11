import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from 'src/app/models/User.model';

@Component({
  selector: 'app-edit-modal',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent {
  @Input() usuario : User = {name:'', lastname: '', email:'', roles:[{rol:'',permissions:[]}]};
  constructor(){}

  ngOnInit(){
    console.log("Usuario desde el hijo: ", this.usuario)
  }
}
