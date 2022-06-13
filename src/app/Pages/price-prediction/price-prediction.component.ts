import { ApiService } from 'src/app/Services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PricepredictionService } from 'src/app/Services/priceprediction.service';
import { PredictionResultsComponent } from '../prediction-results/prediction-results.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-price-prediction',
  templateUrl: './price-prediction.component.html',
  styleUrls: ['./price-prediction.component.scss']
})
export class PricePredictionComponent implements OnInit {

  constructor(public pricePredictionService: PricepredictionService, private formBuilder : FormBuilder , private router: Router ,private api:ApiService) { }

  locations =[{id:1 ,value:"Apartment"}, {id:2, value:"Bungalow"},{ id:3, value: "Chalet"},{id:4, value:"Duplix"},{id:5, value:"Hotel Apartment"},
              {id:6, value:"TownHouse"},{id:7, value:"Studio"},{id:8, value:"Penthouse"},{id:9, value:"Twin House"},{id:10, value:"Villa"},{id:11, value:"Whole Building"}]
  predictionForm !: FormGroup;
  predictionDetails: Array<any>;


  ngOnInit(): void {
    /*this.api.postPredictionResults(this.predictionDetails).subscribe(data => {
      this.predictionDetails = data;
      console.log(data);
    });*/

    this.predictionForm = this.formBuilder.group({
      area_sqm : ['',Validators.required],
      type_name: ['',Validators.required],
      bedrooms: ['',Validators.required],
      bathrooms: ['',Validators.required],
      location_name: ['',Validators.required]
    })
  }

  ViewResult(){
    this.router.navigateByUrl("prediction-result")
  }

}


