import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User.model';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private serverURL = "localhost";
  private URL = `http://${this.serverURL}:3000/api/users`;

  constructor(private http: HttpClient) { }

  getUsers(){

    return this.http.get<[User]>(this.URL).pipe(
      catchError((err)=> {
        console.error(err);
        throw err;
      })
    );
    
  }
  deleteUserById(id:any){
    return this.http.delete(this.URL + '/' + id).pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      })
    )
  }
  

}
