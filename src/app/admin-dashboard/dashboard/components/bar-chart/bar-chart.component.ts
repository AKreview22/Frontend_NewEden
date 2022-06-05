
import { Component, NgModule, OnInit} from '@angular/core';
import {Chart} from 'chart.js'
import { ApiService } from 'src/app/Services/api.service';
import{FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],

})


export class BarChartComponent implements OnInit {
  type="Apartment"
  result: any;
  Bedrooms:any;
  avg:any;
  chart: any = [];
 apart(){
    this.service.barChartDataApart().then((res) => {
    this.result=res
    this.avg = this.result.data.map((data: any) => data.avg);
    this.Bedrooms = this.result.data.map((data: any) => data.Bedrooms);
  this.chart = new Chart('myChart', {
        type: 'bar',
        data: {
          labels:this.Bedrooms,
          datasets: [
            {
              data:this.avg,
              borderColor: '#FCBA02',
              label: 'Average price',
              backgroundColor: [
                'rgb(204, 153, 255)',
                'rgb(178, 102, 255)',
                'rgb(153, 51, 255)',
                'rgba(127, 0, 255)',
                'rgba(102, 0, 204)',
                'rgba( 51, 0, 102)'
              ],
            }]}})
          })
          this.chart.destroy();
 }
 villa(){
  this.service.barChartDataVilla().then((res) => {
    this.result=res
    this.avg = this.result.data.map((data: any) => data.avg);
    this.Bedrooms = this.result.data.map((data: any) => data.Bedrooms);
  this.chart = new Chart('myChart', {
        type: 'bar',
        data: {
          labels:this.Bedrooms,
          datasets: [
            {
              data:this.avg,
              borderColor: '#FCBA02',
              label: 'Average price',
              backgroundColor: [
                'rgb(153, 255, 153)',
                'rgb(51, 255, 51)',
                'rgb(0, 255, 0)',
                'rgba(0, 153, 0, 0.8)',
                'rgba(0, 102, 0, 0.8)',
                'rgba(25, 51, 0, 0.97)'
              ],
            }]}})

          })
          this.chart.destroy();
 }

 town(){
  this.service.barChartDataTown().then((res) => {
    this.result=res
    this.avg = this.result.data.map((data: any) => data.avg);
    this.Bedrooms = this.result.data.map((data: any) => data.Bedrooms);
  this.chart = new Chart('myChart', {
        type: 'bar',
        data: {
          labels:this.Bedrooms,
          datasets: [
            {
              data:this.avg,
              borderColor: '#FCBA02',
              label: 'Average price',
              backgroundColor: [
                'rgb(102, 255, 255)',
                'rgba(0, 153, 153)',
                'rgba(0, 102, 102)',
                'rgba(0, 51, 51)'
              ],
            }]}})

          })
          this.chart.destroy();
 }


 twin(){
  this.service.barChartDataTwin().then((res) => {
    this.result=res
    this.avg = this.result.data.map((data: any) => data.avg);
    this.Bedrooms = this.result.data.map((data: any) => data.Bedrooms);
  this.chart = new Chart('myChart', {
        type: 'bar',
        data: {
          labels:this.Bedrooms,
          datasets: [
            {
              data:this.avg,
              borderColor: '#FCBA02',
              label: 'Average price',
              backgroundColor: [
                'rgb(255, 153, 204)',
                'rgb(245, 88, 166)',
                'rgb(246, 29, 137)',
                'rgba(204, 0, 102)',
                'rgba(153, 0, 76)',
                'rgba(102, 0, 51)'
              ],
            }]}})

          })
          this.chart.destroy();
 }

  userForm = new FormGroup({
    type: new FormControl(),
  });

  constructor(private service:ApiService) {
  }
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.apart()
  }
}





