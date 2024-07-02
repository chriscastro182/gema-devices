import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-modal',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.css']
})
export class CreateModalComponent {

  @Input() usuario : User = {name:'', lastname: '', email:'', roles:[{rol:'',permissions:[]}]};
  @Input()
  Users!: Observable<any>;
  @Output() usersUpdated = new EventEmitter<void>();

  
  constructor(private userService:UserService, private authService:AuthService){ }

  ngOnInit(){
  }

  async createUser(){
    console.log(this.usuario)
    delete this.usuario.roles;

    this.userService.createUser(this.usuario).subscribe({
      next: async (response) => {
        Swal.fire('¡Éxito!', 'Usuario creado correctamente', 'success');

        // función Refresh        
        this.Users = this.userService.getUsers();
        this.usersUpdated.emit();
      }, error: (e) => {
        Swal.fire('¡Error!', `No se pudo crear el Usuario: ${e.error.message}`, 'error');
      }
    })
  }
}
