import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrasDoblesComponent } from './barras-dobles/barras-dobles.component';
import { BarrasComponent } from './barras/barras.component';
import { DonaHttpComponent } from './dona-http/dona-http.component';
import { DonaComponent } from './dona/dona.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'barras',
        component:BarrasComponent
      },
      {
        path:'barras-dobles',
        component:BarrasDoblesComponent
      },
      {
        path:'dona',
        component:DonaComponent
      },
      {
        path:'dona-http',
        component:DonaHttpComponent
      },
      {
        path:'**',
        redirectTo:'barras'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }
