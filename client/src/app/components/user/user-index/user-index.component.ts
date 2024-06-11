import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { InfoModalComponent } from '../info-modal/info-modal.component';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
  openInfoModal(_id : string | undefined){
    if (_id) {
      let usuarioSeleccionado = this.Users?.find(u=>u._id == _id);
      this.User	= usuarioSeleccionado != undefined ? usuarioSeleccionado : this.User;
    }
  }

}
