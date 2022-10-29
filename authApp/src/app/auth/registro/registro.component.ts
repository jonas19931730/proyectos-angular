import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  formulario:FormGroup = this.fb.group({
    nombre:['',[Validators.required,Validators.minLength(3)]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  })
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  validarCampo(campo:string){
    return this.formulario.get(campo)?.touched 
                && this.formulario.get(campo)?.invalid;
  }
  registro(){
    this.formulario.markAllAsTouched();
    if(!this.formulario.valid){
      return;
    }
    console.log('formulario validado')
    
  }



}
