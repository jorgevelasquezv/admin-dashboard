import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { IncreaserComponent } from './increaser/increaser.component';
import { FormsModule } from '@angular/forms';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import {
  BaseChartDirective,
  provideCharts,
  withDefaultRegisterables,
} from 'ng2-charts';

@NgModule({
  declarations: [
    ProgressBarComponent,
    IncreaserComponent,
    DoughnutChartComponent,
  ],
  imports: [CommonModule, BaseChartDirective, FormsModule],
  exports: [ProgressBarComponent, IncreaserComponent, DoughnutChartComponent],

  providers: [provideCharts(withDefaultRegisterables())],
})
export class ComponentsModule {}
