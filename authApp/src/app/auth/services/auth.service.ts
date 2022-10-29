import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { UsuarioResp } from '../interfaces/auth.interfaces';
import {map,tap,catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://localhost:4000/api'
  private _usuario!:UsuarioResp;
  
  get usuario(){
    const usuario =  JSON.parse(localStorage.getItem('usuario') || "{}");
    if(usuario){
        this._usuario = usuario;
    }
    return {...this._usuario};
  }
  constructor(private http:HttpClient) { }

  login(email:string,password:string){
      
    const body = {email,password};
    return this.http.post<UsuarioResp>(`${this.baseUrl}/auth`,body)
      .pipe(
        tap( (resp)=>{
            if(resp.ok){
              this._usuario = {
                uid:resp.uid,
                name:resp.name,
                token:resp.token,
              }
              localStorage.setItem('usuario',JSON.stringify(this._usuario))
            }
          }
        ),
        map(resp=>resp.ok),
        catchError(()=>of(false))
      );
  }

  /*validarToken():Observable<boolean>{
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('usuario.token') || '');

    return this.http.get<UsuarioResp>(`${this.baseUrl}/auth/renew`,{headers})
        .pipe(
          map( resp => {
            return resp.ok;
          }),
          catchError(err=>of(false))
        );
        

  }*/
}
