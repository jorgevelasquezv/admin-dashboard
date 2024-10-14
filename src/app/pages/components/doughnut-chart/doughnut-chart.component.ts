import { Component, Input, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'pages-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
})
export class DoughnutChartComponent implements OnInit {
  @Input() public title: string = 'Not provided';

  @Input() public labels: string[] = ['Label 1', 'Label 2', 'Label 3'];

  @Input() public data: number[] = [1, 1, 1];

  @Input() public backgroundColor: string[] = ['#6857E6', '#009FEE', '#F02059'];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.labels,
    datasets: [
      {
        data: this.data,
        backgroundColor: this.backgroundColor,
      },
    ],
  };

  ngOnInit(): void {
    this.doughnutChartData = {
      labels: this.labels,
      datasets: [
        {
          data: this.data,
          backgroundColor: this.backgroundColor,
        },
      ],
    };
  }
}
