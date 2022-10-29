import { Component, OnInit } from '@angular/core';

interface Menu{
  path:string;
  nombre:string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
     li{
       cursor:pointer;
     } 
    `
  ]
})
export class MenuComponent implements OnInit {

  rutas:Menu[] = [
    {
      path:'graficas/barras',
      nombre:'Barras'
    },
    {
      path:'graficas/barras-dobles',
      nombre:'Barras Dobles'
    },
    {
      path:'graficas/dona',
      nombre:'Dona'
    },
    {
      path:'graficas/dona-http',
      nombre:'Dona Http'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
