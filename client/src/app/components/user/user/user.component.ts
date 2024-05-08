import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  Users:any = [
    {id:1, name: "Luis", lastname: "Castillo Vera", email: "soyjoto@gmail.com", createdAt: "23/04/18"},
    {id:2, name: "Christian", lastname: "Castro Rios", email: "vampiro.castro@gmail.com", createdAt: "23/04/18"},
    {id:3, name: "Yoss", lastname: "Bello Jimenez", email: "bellojimenez@gmail.com", createdAt: "23/04/18"},
  ];
}
