import { HttpClient } from '@angular/common/http';
import { PResults } from './../p-results';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-prediction-results',
  templateUrl: './prediction-results.component.html',
  styleUrls: ['./prediction-results.component.scss']
})
export class PredictionResultsComponent implements OnInit {

  public resultId: number;
  result = new PResults();
  //resultList: any;
  dataSource!: MatTableDataSource<any>;


  constructor(private api : ApiService, private http:HttpClient) {
  }

  ngOnInit(): void {
    this.api.getResult(this.resultId).subscribe( res => {
      this.result.id = res.id;
    });

    //this.getResultList();
  }

  getResults(){
    this.api.postPredictionResults(this.result).subscribe({
      next:(res) =>{
        this.dataSource=new MatTableDataSource(res);
      },
      error:(err) =>
      alert("Error while Fetching Data")
    })

  }

}
