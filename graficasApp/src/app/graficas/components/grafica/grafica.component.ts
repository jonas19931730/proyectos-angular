import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styles: [
  ]
})
export class GraficaComponent {
  
  @Input('barChartData') barChartData!:ChartData;
  @Input('barChartType') barChartType!:ChartType;
  
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  //inputs
  

  
  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    //console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    //console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      14, 14, 25, 2, 3, 85, 66 

    ];

    this.chart?.update();
  }
  

}
