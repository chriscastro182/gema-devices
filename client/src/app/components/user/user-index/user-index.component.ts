import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent {
  Users:any = [
    {id:1, name: "Luis", lastname: "Castillo Vera", email: "soyjoto@gmail.com", createdAt: "23/04/18"},
    {id:2, name: "Christian", lastname: "Castro Rios", email: "vampiro.castro@gmail.com", createdAt: "23/04/18"},
    {id:3, name: "Yoss", lastname: "Bello Jimenez", email: "bellojimenez@gmail.com", createdAt: "23/04/18"},
  ];
}
