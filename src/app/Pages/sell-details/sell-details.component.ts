import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , Validators } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';
import { Property } from '../property';
import { MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-sell-details',
  templateUrl: './sell-details.component.html',
  styleUrls: ['./sell-details.component.scss']
})
export class SellDetailsComponent implements OnInit {

  property: Property;
  yearsList = ["3 Years", "5 Years" , "7 Years" , "10 Years"];
  propertyForm !: FormGroup;
  constructor(private formBuilder : FormBuilder , private api : ApiService , private dialogRef :MatDialogRef<SellDetailsComponent>) { }

  ngOnInit(): void {
    this.propertyForm = this.formBuilder.group({
      deposit : ['',Validators.required],
      years: ['',Validators.required],
      monthly: ['',Validators.required],
      overallPrice: ['',Validators.required],
      deliverDate: ['',Validators.required],
      equalInstall: [false]
    })
  }

  onSale(){
    if(this.propertyForm.valid){
      this.api.postSellData(this.propertyForm.value).subscribe({
        next:(res)=>{
          alert("Property Has Been Selled Successfully!");
          this.propertyForm.reset();
          this.dialogRef.close('Sell Successfully');
        },
        error:()=>{
          alert("Error Happened While Selling the Property")
        }
      })
    }
  }

  /*getPropertyData(data){
    console.warn(data);
  }*/

}
