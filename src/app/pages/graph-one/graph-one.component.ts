import { Component } from '@angular/core';

@Component({
  selector: 'pages-graph-one',
  templateUrl: './graph-one.component.html',
})
export class GraphOneComponent {
  public titleOne: string = 'Graph One';
  public dataOne: number[] = [400, 150, 600];
  public backgroundColorOne: string[] = ['#6857E6', '#009FEE', '#F02059'];
  public labelsOne: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];

  public titleTwo: string = 'Graph Two';
  public dataTwo: number[] = [100, 200, 300];
  public backgroundColorTwo: string[] = ['#009FEE', '#F02059', '#6857E6'];
  public labelsTwo: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];

  public titleThree: string = 'Graph Three';
  public dataThree: number[] = [200, 300, 400];
  public backgroundColorThree: string[] = ['#F02059', '#6857E6', '#009FEE'];
  public labelsThree: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];

  public titleFour: string = 'Graph Four';
  public dataFour: number[] = [300, 400, 500];
  public backgroundColorFour: string[] = ['#6857E6', '#009FEE', '#F02059'];
  public labelsFour: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
}
