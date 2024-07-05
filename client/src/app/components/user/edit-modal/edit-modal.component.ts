import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from 'src/app/models/User.model';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-modal',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent {
  @Input() usuario!: User;
  
  @Output() usersUpdated = new EventEmitter<void>();

  constructor(private userService:UserService){}

  ngOnInit(){
    console.log("Usuario desde el hijo: ", this.usuario)
  }
  updateUsuario(){
    console.log(this.usuario)
    
    this.userService.updateUserById(this.usuario).subscribe({
      next: async (response) => {
        Swal.fire('¡Éxito!', 'Usuario actualizado correctamente', 'success');

        // función Refresh        
        this.usersUpdated.emit();
      }, error: (e) => {
        Swal.fire('¡Error!', `No se pudo actualizar al Usuario: ${e.error.message}`, 'error');
      }
    })
  }
}
