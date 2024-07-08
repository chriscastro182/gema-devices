import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

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
  
  createUser(user: User): Observable<User> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(user);
    return this.http.post<User>(this.URL, body, { 'headers': headers })
    .pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      })
    ) 
  }

  updateUserById(user: User): Observable<User> {
    const headers = { 'content-type': 'application/json' }
    const userId = user._id;
    const body = JSON.stringify(user);
    return this.http.put<User>(this.URL+ '/' + userId, body, { 'headers': headers })
    .pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      })
    )
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
