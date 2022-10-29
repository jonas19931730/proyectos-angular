import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  
  formulario:FormGroup = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  })
  constructor(private fb:FormBuilder,
             private router:Router,
             private authService:AuthService) { }

  ngOnInit(): void {
  }

  validarCampo(campo:string){
    return this.formulario.get(campo)?.touched 
                && this.formulario.get(campo)?.invalid;
  }
  login(){
    this.formulario.markAllAsTouched();
    if(!this.formulario.valid){
      return;
    }
    const {email,password} = this.formulario.value;
    this.authService.login(email,password).subscribe((resp)=>{
      console.log(resp)
      if(resp){
        this.router.navigateByUrl('/protected/principal')
      }
      else{
        Swal.fire({
          title: 'Error!',
          text: 'Credenciales incorrectas',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
      
    })
  }

}
