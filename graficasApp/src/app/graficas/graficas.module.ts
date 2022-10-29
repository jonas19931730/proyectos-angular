import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficasRoutingModule } from './graficas-routing.module';
import { BarrasComponent } from './barras/barras.component';
import { BarrasDoblesComponent } from './barras-dobles/barras-dobles.component';
import { DonaComponent } from './dona/dona.component';
import { DonaHttpComponent } from './dona-http/dona-http.component';
import { NgChartsModule } from 'ng2-charts';
import { GraficaComponent } from './components/grafica/grafica.component';

@NgModule({
  declarations: [
    BarrasComponent,
    BarrasDoblesComponent,
    DonaComponent,
    DonaHttpComponent,
    GraficaComponent,
  ],
  imports: [
    CommonModule,
    GraficasRoutingModule,
    GraficasRoutingModule,
    NgChartsModule
  ],
  exports:[
    BarrasComponent,
    BarrasDoblesComponent,
    DonaComponent,
    DonaHttpComponent,
    GraficaComponent
  ]
})
export class GraficasModule { }
