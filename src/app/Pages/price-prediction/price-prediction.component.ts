import { ApiService } from 'src/app/Services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PricepredictionService } from 'src/app/Services/priceprediction.service';
import { PredictionResultsComponent } from '../prediction-results/prediction-results.component';

@Component({
  selector: 'app-price-prediction',
  templateUrl: './price-prediction.component.html',
  styleUrls: ['./price-prediction.component.scss']
})
export class PricePredictionComponent implements OnInit {

  constructor(public pricePredictionService: PricepredictionService, private formBuilder : FormBuilder , private dialog: MatDialog ,private api:ApiService) { }

  locations =[{id:1 ,value:"North Coast"}, {id:2, value:"6th October"},{ id:3, value: "Al Ain Al Sokhna"},{id:4, value:"Mostakbal City"},{id:5, value:"New Adminstrative Capital"},
              {id:6, value:"New Helioplis City"},{id:7, value:"New Cairo"},{id:8, value:"Shorok City"}]
  predictionForm !: FormGroup;
  predictionDetails: Array<any>;


  ngOnInit(): void {
    /*this.api.postPredictionResults(this.predictionDetails).subscribe(data => {
      this.predictionDetails = data;
      console.log(data);
    });*/

    this.predictionForm = this.formBuilder.group({
      area : ['',Validators.required],
      type: ['',Validators.required],
      bedroom: ['',Validators.required],
      bathroom: ['',Validators.required],
      location: ['',Validators.required]
    })
  }

  /*prediction(data){

  }*/

  openDialog() {
    this.dialog.open(PredictionResultsComponent, {});
  }

}


