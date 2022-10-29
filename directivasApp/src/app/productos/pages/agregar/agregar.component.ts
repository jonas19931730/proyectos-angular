import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  formulario:FormGroup = this.fb.group({
    nombre:['',[Validators.required]]
  })
  nombre:string = "Jonathan Sosa";
  color:string = "red";

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  esInvalido(campo:string){
    return this.formulario.get(campo)?.invalid || false;
  }

  cambiarNombre(){
    this.nombre = "Steven Figueroa"
  }
  cambiarColor(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));

    this.color = color;
  }

}
