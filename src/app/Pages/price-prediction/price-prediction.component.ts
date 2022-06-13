import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { Component, OnInit , Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PredictionResultsComponent } from '../prediction-results/prediction-results.component';
import { Router } from '@angular/router';
import { MatDialogRef , MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-price-prediction',
  templateUrl: './price-prediction.component.html',
  styleUrls: ['./price-prediction.component.scss']
})
export class PricePredictionComponent implements OnInit {

  predictionForm !:FormGroup;
  actionBtn : string="Predict";
  constructor(private formBuilder: FormBuilder,private api:ApiService,@Inject(MAT_DIALOG_DATA) public editData :any,private dialog:MatDialogRef<PredictionResultsComponent>) { }

  ngOnInit(): void {
    this.predictionForm=this.formBuilder.group({
      type_name: ['', Validators.required],
      location_name: ['', Validators.required],
      area_sqm: ['', Validators.required],
      bathrooms: ['', Validators.required],
      bedrooms: ['', Validators.required]

    });
    //this.predict();

}

predict(){
  if(!this.editData){
   if(this.predictionForm.valid){
     this.api.postPredictionResults(this.predictionForm.value)
     .subscribe({
       next:(res)=>{
         console.log(res);
         this.dialog.close("Predicted Sucessfully!");
       },
       error:()=>{
         alert("Error while adding employee");
       }
     })
   }
  }
 }
}





  /*constructor(public pricePredictionService: PricepredictionService, private formBuilder : FormBuilder , private router: Router ,private api:ApiService) { }

  locations =[{id:1 ,value:"Apartment"}, {id:2, value:"Bungalow"},{ id:3, value: "Chalet"},{id:4, value:"Duplix"},{id:5, value:"Hotel Apartment"},
              {id:6, value:"TownHouse"},{id:7, value:"Studio"},{id:8, value:"Penthouse"},{id:9, value:"Twin House"},{id:10, value:"Villa"},{id:11, value:"Whole Building"}]
  predictionForm !: FormGroup;
  predictionDetails: Array<any>;


  ngOnInit(): void {
    /*this.api.postPredictionResults(this.predictionDetails).subscribe(data => {
      this.predictionDetails = data;
      console.log(data);
    });*/

    /*this.predictionForm = this.formBuilder.group({
      area_sqm : ['',Validators.required],
      type_name: ['',Validators.required],
      bedrooms: ['',Validators.required],
      bathrooms: ['',Validators.required],
      location_name: ['',Validators.required]
    })
  }

  ViewResult(){
    this.router.navigateByUrl("prediction-result")
  }/*

-----------------------------------------------------



    //console.log(this.editData);
  }
  addEmp(){
   if(!this.editData){
    if(this.empForm.valid){
      this.api.postEmp(this.empForm.value)
      .subscribe({
        next:(res)=>{
          console.log(res);
          this.empForm.reset();
          this.dialog.close("Saved");
        },
        error:()=>{
          alert("Error while adding employee");
        }
      })
    }
   }else{
     this.updateEmp();
   }
  }
