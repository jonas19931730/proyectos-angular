import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable} from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import {  tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate,CanLoad {


  constructor(private authService:AuthService){

  }
  canLoad(): Observable<boolean> | boolean  {
    //return this.authService.validarToken();
     return true; 
  }
  
  canActivate(): Observable<boolean> | boolean  {
    return true;
  }
  
}
