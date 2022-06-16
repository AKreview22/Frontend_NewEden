import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-sales-query',
  templateUrl: './sales-query.component.html',
  styleUrls: ['./sales-query.component.scss']
})
export class SalesQueryComponent implements OnInit {

  salesQueryForm !: FormGroup;

  constructor(private formBuilder:FormBuilder,private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.salesQueryForm=this.formBuilder.group({
      month: ['', Validators.required],
      year: ['', Validators.required],
    });
  }
  submit(){
    if(this.salesQueryForm.valid){
      this.api.postSalesQuer(this.salesQueryForm.value)
      .subscribe({
        next:(res)=>{
          this.router.navigateByUrl('/admin-dashboard/salesResult');
          // alert("Query submitted successfully");
        },


        error:()=>{
          alert("Error while submitting the query");
        }
      })
    }
   }

}
