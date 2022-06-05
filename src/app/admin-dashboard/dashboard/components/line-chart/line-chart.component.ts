
import { Component, OnInit,ViewChild} from '@angular/core';
import {Chart} from 'chart.js'
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})

export class LineChartComponent implements OnInit {
  result: any;
  count: any;
  Date: any;
  chart: any = [];
  sum: any;

  constructor(private service:ApiService) {
  }
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.service.lineChartData().then((res) => {
      this.result = res;
        this.count = this.result.data.map((data: any) => data.count);
        this.Date = this.result.data.map((data: any) => data.month);
        this.sum = this.result.data.map((data: any) => data.sum);
      this.chart = new Chart('chart', {
        type: 'line',
        data: {
          labels: this.Date,
          datasets: [
            {
              data: this.count,
              borderColor: '#FCBA02',
              fill:false,
              label: 'number of units sold',
              backgroundColor: 'black',
              borderWidth: 3,
            },
            {
              data: this.sum,
              borderColor: '#bdf2d5',
              fill:false,
              label: 'sales',
              backgroundColor: 'black',
              borderWidth: 3,
            },
          ],
        },
      });
    });
  }
}








