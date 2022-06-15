import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { PricePredictionComponent } from '../price-prediction/price-prediction.component';
import { MatDialog , MAT_DIALOG_DATA} from '@angular/material/dialog';




@Component({
  selector: 'app-prediction-results',
  templateUrl: './prediction-results.component.html',
  styleUrls: ['./prediction-results.component.scss']
})
export class PredictionResultsComponent implements OnInit {

  displayedColumns: string[] = ['predictedPrice','numberOfElements', 'highestPrice' , 'lowestPrice' , 'rangePrice','averagePrice','modePrice','medianPrice'];
  dataSource!: MatTableDataSource<any>;


  constructor(private dialog:MatDialog,private api:ApiService) { }

  ngOnInit(): void {
    this.getPredictionResult();
  }

  openDialog(){
    this.dialog.open(PricePredictionComponent,{
      width: '30%'
    }).afterClosed().subscribe(val=>{
      if(val === 'Predict'){
        this.getPredictionResult();
      }
    })
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

