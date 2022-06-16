import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { PricePredictionComponent } from '../price-prediction/price-prediction.component';
import { MatDialog , MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';




@Component({
  selector: 'app-prediction-results',
  templateUrl: './prediction-results.component.html',
  styleUrls: ['./prediction-results.component.scss']
})
export class PredictionResultsComponent implements OnInit {

  displayedColumns: string[] = ['predicted_price','houses_quantity', 'maximum_price' , 'minimum_price' , 'price_range','average_price','mode_of_prices','median_of_prices'];
  dataSource!: MatTableDataSource<any>;


  constructor(private dialog:MatDialog,private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.getPredictionResult();
  }

  getPredictionResult(){
    this.api.getPredictionResult()
    .subscribe({
      next:(res :any)=>{
        this.dataSource=new MatTableDataSource(res);
      },
      error:(err)=>{
        alert("Error while fetching the data!!")
      }
    })
  }



}

