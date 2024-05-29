import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private serverURL = "localhost";
  private URL = `http://${this.serverURL}:3000/api/auth`;

  constructor(private http: HttpClient, private router: Router) { }

  signIn(user: any){
    return this.http.post<any>(this.URL+'/signin', user)
  }

  signUp(user: any){
    return this.http.post<any>(this.URL+'/signup', user)
  }

  loggedIn(): Boolean{
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getUserId(){
    return localStorage.getItem('userId');
  }

  getIds(){    
    const url = this.URL+'/userIdsByToken';
    //console.log(url)
    return this.http.get<any>(url)
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');

    this.router.navigate(['/auth/login']);
  }
  getSessionBehavior(err: number){
    if (err === 401) {
      this.logout()
    }
    if (err === 403) {
      this.logout()
    }
    if (err==500){
      this.router.navigate(['/auth/login']);
    }
  }

  isAdminByToken(){    
    const url = this.URL+'/isAdminByToken';
    //console.log(url)    
    return this.http.get<any>(url)
  }
}