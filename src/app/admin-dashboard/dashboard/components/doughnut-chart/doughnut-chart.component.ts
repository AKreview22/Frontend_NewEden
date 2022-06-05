import { Component, OnInit,ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {
  result: any;
  avgArea: any;
  type: any;
  avgPrice: any;
  chart: any = [];

  constructor(private service:ApiService) {
  }

  ngOnInit(): void {
  }


  ngAfterViewInit()  {
    this.service.doughnutChartData().then((res) => {
      this.result = res;
        this.avgArea = this.result.data.map((data: any) => data.avgArea);
        this.type = this.result.data.map((data: any) => data.Type);
        this.avgPrice = this.result.data.map((data: any) => data.avgPrice);

      this.chart = new Chart('doughnut', {
        type: 'doughnut',
        data: {
          labels: this.type,
          datasets: [
            {
              data: this.avgArea,
              borderColor: '#bdf2d5',
              label: 'area',
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgba(143, 83, 114, 0.8)',
                'rgba(83, 143, 93, 0.8)',
                'rgba(255, 171, 137, 0.97)'
              ],
            },
            {
              data: this.avgPrice,
              borderColor: '#bdf2d5',
              label: 'price',
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
    });
  }
}
