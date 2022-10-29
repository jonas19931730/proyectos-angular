import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent {

  public barChartType: ChartType = 'doughnut';
 
  public barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Barcelona' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Emelec' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Liga' }
    ]
  };



}
