import { Component } from '@angular/core';
import { User } from 'src/app/models/User.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Usuario:User = {
    name: '',
    id: 0,
    lastname: '',
    email: '',
    createdAt: ''
  }



  OnSubmit(){
    let { email, password } = this.Usuario;
    let loginRequest = { email, password };

    console.log(loginRequest);
  }


  /* invertirNombre(){
    this.Usuario.email = this.Usuario.email.split('').reverse().join('');
    console.log(this.Usuario.email);
  } */
}
