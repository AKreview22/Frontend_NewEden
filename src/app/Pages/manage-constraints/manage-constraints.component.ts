import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-manage-constraints',
  templateUrl: './manage-constraints.component.html',
  styleUrls: ['./manage-constraints.component.scss']
})
export class ManageConstraintsComponent implements OnInit {

  consForm !:FormGroup;


  constructor(private formBuilder: FormBuilder, private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.consForm=this.formBuilder.group({
      maxYears:['',Validators.required],
      interest:['',Validators.required],
      minDeposit:['',Validators.required],
      addExpenses:['',Validators.required],
      paidBeforeDelivery:['',Validators.required]
    });
  }
  save(){
      if(this.consForm.valid){
        this.api.postCons(this.consForm.value)
        .subscribe({
          next:(res)=>{
            alert("Constraint added successfully");
            this.consForm.reset();
          },
          error:()=>{
            alert("Error while adding constraint")
          }
        })
      }
    }
    viewConst(){
      this.router.navigateByUrl("constTable")
    }
  }

