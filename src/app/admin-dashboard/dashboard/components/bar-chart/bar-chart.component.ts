import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  constructor(private service: ApiService) { }

  ngOnInit(): void {
  }

  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: [3+" Bedrooms",3+" Bedrooms",3+" Bedrooms",3+" Bedrooms",1+" Bedroom",1+" Bedroom",2+" Bedrooms",2+" Bedrooms",3+" Bedrooms",3+" Bedrooms",1+" Bedroom",2+" Bedrooms",3+" Bedrooms",2+" Bedrooms",2+" Bedrooms",2+" Bedrooms",3+" Bedrooms",2+" Bedrooms",2+" Bedrooms",2+" Bedrooms",2+" Bedrooms",2+" Bedrooms",2+" Bedrooms",1+" Bedroom",2+" Bedrooms"],
        datasets: [{
          label: 'Apartment Price',
          data: [2300000, 2356000, 2365000, 4442000, 1550000, 1550000, 1590000, 1700000, 1720000, 1750000, 1750000, 1840000, 1880000, 1881000, 1911000, 1948044, 2000000, 2149000, 2150000, 2200000, 2210000, 2248000, 2268000, 2285000],
          borderWidth: 3,
                fill: false,
                backgroundColor: ['rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'],
                borderColor: ['rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)',
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)',
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)',
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',]
        },
        ],
      },
    });
  }

}
