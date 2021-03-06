import { Component, OnInit,ViewChild} from '@angular/core';
import {Chart} from 'chart.js'
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  result: any;
  count: any;
  type: any;
  sum: any;

  chart: any = [];

  constructor(private service:ApiService) {
  }

  ngOnInit(): void {
  }


  ngAfterViewInit()  {
    this.service.pieChartData().then((res) => {
      this.result = res;
        this.count = this.result.data.map((data: any) => data.count);
        this.type = this.result.data.map((data: any) => data.Type);
        this.sum = this.result.data.map((data: any) => data.sum);

      this.chart = new Chart('canvas', {
        type: 'pie',
        data: {
          labels: this.type,
          datasets: [
            {
              data: this.count,
              borderColor: '#bdf2d5',
              label: 'count',
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
              data: this.sum,
              borderColor: '#bdf2d5',
              label: 'sales',
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
