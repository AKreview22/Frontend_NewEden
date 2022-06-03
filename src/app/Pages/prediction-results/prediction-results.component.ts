import { HttpClient } from '@angular/common/http';
import { PResults } from './../p-results';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';


@Component({
  selector: 'app-prediction-results',
  templateUrl: './prediction-results.component.html',
  styleUrls: ['./prediction-results.component.scss']
})
export class PredictionResultsComponent implements OnInit {

  public resultId: number;
  result = new PResults();
  //resultList: any;

  constructor(private api : ApiService, private http:HttpClient) {
  }

  ngOnInit(): void {
    this.api.getResult(this.resultId).subscribe( res => {
      this.result.id = res.id;
    });

    //this.getResultList();
  }

  /*getResultList(){
    this.http.get('http://localhost:3000/predictionDetails').subscribe((res:any) => {
    this.resultList = res;
    });
  }*/
}
