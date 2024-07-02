import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { InfoModalComponent } from '../info-modal/info-modal.component';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { CreateModalComponent } from '../create-modal/create-modal.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-index',
  standalone:true,
  imports: [CommonModule,InfoModalComponent, EditModalComponent, DeleteModalComponent, RouterModule, CreateModalComponent],
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent {
  //Users:[User] | undefined;
  Users!: Observable<any[]>;
  User:User = {name:'', lastname: '', email:'', roles:[{rol:'',permissions:[]}]};
  infoBool:boolean = false;

  constructor(private userService:UserService, private authService:AuthService){
    
  }

  async ngOnInit(){
    this.Users = this.userService.getUsers();
  }
  onUsersUpdated() {
    this.Users = this.userService.getUsers(); // Actualiza la lista de usuarios
  }
  ansDeleteUser(userId:any)
  {
    Swal.fire({
      title: '¿Realmente deseas elminar este usuario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      customClass: {
        confirmButton: 'btn btn-danger mx-3', // Clase personalizada para el botón de confirmación
        cancelButton: 'btn btn-secondary' // Clase personalizada para el botón de cancelar, si es necesario
      },
      buttonsStyling: false
    }).then((result:any) => {
      if (result.isConfirmed) { 
        this.deleteUserById(userId);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
  deleteUserById(userId:any) { 
    this.userService.deleteUserById(userId).subscribe({
      next: (response) => {
        Swal.fire('¡Éxito!', 'Usuario eliminado correctamente', 'success');

        // función Refresh
        this.Users = this.userService.getUsers();
      }, error: (e) => {
        Swal.fire('¡Error!', `No se pudo eliminar el Usuario: ${e.error.message}`, 'error');

      }
    })
  }
  
  openInfoModal(_id : string | undefined){
    if (_id) {
      this.Users.subscribe(
        r => this.User = r.find(u=>u._id == _id)
      );      
    }
  }

  openEditModal(_id : string | undefined){
    if (_id) {
      this.Users.subscribe(
        u =>  this.User = u.find(u=>u._id == _id)
      );
    }
  }

  openCreateModal(){
    this.User = { name: "", lastname: "", email: "", createdAt: new Date().toISOString(), roles:[{rol:"user", permissions:[]}]};
  }

}
