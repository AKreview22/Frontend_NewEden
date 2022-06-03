import { Component, OnInit,ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dounght-chart',
  templateUrl: './dounght-chart.component.html',
  styleUrls: ['./dounght-chart.component.scss']
})
export class DounghtChartComponent implements OnInit {
  chart: any = [];

  constructor() { }

  ngOnInit(): void {
  }
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'doughnut',
      data: {
        labels:[
          '148 m',
          '113 m',
          '170 m',
          '186 m',
          '200 m',
          '136 m'
        ],
        datasets: [{
          label: 'Sold Apartments',
          data: [5, 21, 5,4,7,9],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgba(143, 83, 114, 0.8)',
            'rgba(83, 143, 93, 0.8)',
            'rgba(255, 171, 137, 0.97)'
          ],
        },
        ],
      },
    });
  }

}
