import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , Validators } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';
import { Property } from '../property';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sell-details',
  templateUrl: './sell-details.component.html',
  styleUrls: ['./sell-details.component.scss']
})
export class SellDetailsComponent implements OnInit {

  property= new Property();
  yearsList = ["3 Years", "5 Years" , "7 Years" , "10 Years"];
  propertyForm !: FormGroup;
  getId:any;
  constructor(private formBuilder : FormBuilder , private api : ApiService , private dialogRef :MatDialogRef<SellDetailsComponent>) {}

  ngOnInit(): void {
    this.propertyForm = this.formBuilder.group({
    deposit : ['',Validators.required],
    years: ['',Validators.required]
    })
    

  }
 
  onCalc(){
    if(this.propertyForm.valid){
      this.api.postCalcPayment(this.propertyForm.value,this.getId).subscribe({
        next:(res)=>{
          console.log(res);
        },
        error:()=>{
          alert("Error Happened While Selling the Property")
        }

      })

    }
  }

}
