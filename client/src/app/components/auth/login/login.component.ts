import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User.model';
import { AuthService } from 'src/app/services/auth.service';

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
  };
  serverMessage: string = '';
  loading:boolean = false;
  warnNotification:boolean = false;
  errorNotification:boolean = false;

  constructor(private _authService: AuthService, private _router: Router){
    
  }

  OnSubmit(){

    let { email, password } = this.Usuario;
    let loginRequest = { email, password };
    this.loading = true;

      this._authService.signIn(loginRequest).subscribe(
        res => {
          if (res.token) {
              this.loading=false;
              console.log(res.userFound)
              localStorage.setItem('token', res.token);
              localStorage.setItem('userId', res.userFound._id);
              localStorage.setItem('username', res.userFound.name +`  `+res.userFound.lastname);
              this._router.navigate(['/smart-home'])
              
          }
        },
        err => {        
          this.serverMessage = err.error.message;          
          this.loading=false;
          
          switch (err.status) {
            case 404:
                this.errorNotification = true;
              break;
            case 401:
                this.warnNotification = true;
              break;
            default:              
              this.errorNotification = true;
              this.serverMessage = 'Error desconocido';
              break;
          }          
        }
    );

    setTimeout(() => {
      this.warnNotification = false;
      this.errorNotification = false;
    }, 10000);
  }

}
