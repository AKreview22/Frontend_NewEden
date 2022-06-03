import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-filter-query',
  templateUrl: './filter-query.component.html',
  styleUrls: ['./filter-query.component.scss']
})
export class FilterQueryComponent implements OnInit {

  filterQueryForm !: FormGroup;

  constructor(private formBuilder:FormBuilder,private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.filterQueryForm=this.formBuilder.group({
      month:['All'],
      year:['All'],
    });
  }
  submit(){
    if(this.filterQueryForm.valid){
      this.api.postFilterQuer(this.filterQueryForm.value)
      .subscribe({
        next:(res)=>{
          alert("Query submitted successfully");
          this.router.navigateByUrl('filterResult')
        },
        error:()=>{
          alert("Error while submitting the query");
        }
      })
    }
   }

}
