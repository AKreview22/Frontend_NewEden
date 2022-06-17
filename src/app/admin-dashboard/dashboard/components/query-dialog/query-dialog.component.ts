import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-query-dialog',
  templateUrl: './query-dialog.component.html',
  styleUrls: ['./query-dialog.component.scss']
})
export class QueryDialogComponent implements OnInit {


  queryForm !: FormGroup;

  constructor(private formBuilder:FormBuilder,private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.queryForm=this.formBuilder.group({
      count:[''],
      Type:['All'],
      minPrice:['All'],
      maxPrice:['All'],
      minArea:['All'],
      maxArea:['All'],
      Level:['All'],
      Finished:['All'],
      Garden:['All'],
      Sold:['All'],
      sellerID_id_filter:['All'],
      startDate:['All'],
      EndDate:['All'],
      Bathrooms:['All'],
      Bedrooms:['All'],

      PriceinEGP:['All'],
      Areainsqm:['All'],
      id:['']
    });
  }
  submit(){
   if(this.queryForm.valid){
     this.api.postQuer(this.queryForm.value)
     .subscribe({
       next:(res)=>{
        //  alert("Query submitted successfully");
         this.router.navigateByUrl('/admin-dashboard/result')
       },
       error:()=>{
         alert("Error while submitting the query");
       }
     })
   }
  }


priceShown: boolean = false ; // hidden by default
togglePrice() {
this.priceShown = ! this.priceShown;
}

areaShown: boolean = false ; // hidden by default
toggleArea() {
this.areaShown = ! this.areaShown;
}

dateShown: boolean = false ; // hidden by default
toggleDate() {
this.dateShown = ! this.dateShown;
}


}
