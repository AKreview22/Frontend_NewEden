import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

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
      type: 'line',
      data: {
        labels:[170+'m',170+'m',170+'m',214+'m',86+'m',86+'m',133+'m',145+'m',197+'m',97+'m',133+'m',217+'m',148+'m',133+'m',133+'m',208+'m',151+'m',133+'m',148+'m',133+'m',133+'m',133+'m',96+'m',148+'m'],
        datasets: [{
          label: 'Current Value',
          data: [2300000, 2356000, 2365000, 4442000, 1550000, 1550000, 1590000, 1700000, 1720000, 1750000, 1750000, 1840000, 1880000, 1881000, 1911000, 1948044, 2000000, 2149000, 2150000, 2200000, 2210000, 2248000, 2268000, 2285000],
          backgroundColor: "rgb(115 185 243 / 65%)",
          borderColor: "#007ee7",
          fill: true
        },
        ],
      },
    });
  }
}



