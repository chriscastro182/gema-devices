import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  Usuario:User = {
    name: '',
    lastname: '',
    email: '',
    password:'',
    _id:'',
    createdAt: new Date().toISOString(),
    roles: [{rol:'', permissions:[]}]
  };
  serverMessage: string = '';
  register:boolean = false;
  warnNotification:boolean = false;
  errorNotification:boolean = false;

  constructor(private _authService : AuthService, private _router : Router){

  }


  ngOnInit(){
    console.log('Usuario al inicio: ',this.Usuario)
    
  }
  registrar(){
    let { email, password, name, lastname } = this.Usuario;

    let requestUser = { email, password, name, lastname };
    this.register = true;
    
    this._authService.signUp(requestUser).subscribe(
      res => {
        console.log('Respuesta del server: ', res)

        localStorage.setItem('token', res.token);
        //localStorage.setItem('userId', res.userFound._id);
        //localStorage.setItem('username', res.userFound.name +`  `+res.userFound.lastname);
        this._router.navigate(['/smart-home'])
      },
      err => {
        this.serverMessage = err.error.message;          
          this.register=false;
          
          switch (err.status) {
            case 500:
                this.errorNotification = true;
              break;
            case 400:
                this.warnNotification = true;
              break;
            default:              
              this.errorNotification = true;
              this.serverMessage = 'Error desconocido';
              break;
          }       
        console.error(err)
        setTimeout(() => {
          this.warnNotification = false;
          this.errorNotification = false;
        }, 10000);
      }
    )




  }
}
