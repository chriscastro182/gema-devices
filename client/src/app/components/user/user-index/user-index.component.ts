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

@Component({
  selector: 'app-user-index',
  standalone:true,
  imports: [CommonModule,InfoModalComponent, EditModalComponent, DeleteModalComponent, RouterModule],
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent {
  Users:[User] | undefined;
  User:User = {name:'', lastname: '', email:'', roles:[{rol:'',permissions:[]}]};
  infoBool:boolean = false;

  constructor(private userService:UserService, private authService:AuthService){
    /* this.usuario = {_id:1, name: "Luis", lastname: "Castillo Vera", email: "soyjoto@gmail.com", createdAt: "23/04/18", roles:[]};
    this.Users = [ this.usuario]; */
  }

  async ngOnInit(){
    await this.getAllUsers();
  }
  async getAllUsers(){
    await this.userService.getUsers().subscribe(
      res => {
        console.log(res)
        this.Users = res;
      },
      err => {
        console.log(err)
        this.authService.getSessionBehavior(err.status);
      }
    );
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
    }).then((result) => {
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
        this.getAllUsers();
      }, error: (e) => {
        Swal.fire('¡Error!', `No se pudo eliminar el Usuario: ${e.error.message}`, 'error');

      }
    })
  }
  
  openInfoModal(_id : string | undefined){
    if (_id) {
      let usuarioSeleccionado = this.Users?.find(u=>u._id == _id);
      this.User	= usuarioSeleccionado != undefined ? usuarioSeleccionado : this.User;
    }
  }

  openCreateModal(){
    this.User = { name: "", lastname: "", email: "", createdAt: "23/04/18", roles:[{rol:"user", permissions:[]}]};
  }

}
