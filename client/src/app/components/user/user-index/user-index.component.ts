import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent {
  Users:[User] | undefined 

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

}
