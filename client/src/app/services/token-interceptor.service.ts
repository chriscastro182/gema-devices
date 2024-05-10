import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  
  constructor(private atuhService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>  {
    
    const token = this.atuhService.getToken();

    const tokenizeReq = req.clone({
      setHeaders: {
        "x-access-token": !token ? '': token
      }
    });
    
    return next.handle(tokenizeReq);
  }

}