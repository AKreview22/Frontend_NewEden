import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/Services/api.service';
import { ManageEmployeeComponent } from '../manage-employee/manage-employee.component';

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.scss']
})
export class EmployeeDialogComponent implements OnInit {

  empForm !:FormGroup;
  actionBtn : string="Save";
  constructor(private formBuilder: FormBuilder,private api:ApiService,@Inject(MAT_DIALOG_DATA) public editData :any,private dialog:MatDialogRef<ManageEmployeeComponent>) { }

  ngOnInit(): void {
    this.empForm=this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      Role: ['', Validators.required]

    });

    //console.log(this.editData);
    if(this.editData){
      this.actionBtn="Update";

      this.actionBtn = "Update";
      this.empForm.controls['id'].setValue(this.editData.id);
      this.empForm.controls['name'].setValue(this.editData.name);
      this.empForm.controls['email'].setValue(this.editData.email);
      this.empForm.controls['password'].setValue(this.editData.password);
      this.empForm.controls['Role'].setValue(this.editData.empRole);


    }
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

  updateEmp(): void{
    this.api.putEmp(this.empForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        console.log(res);
        alert("Employee updated successfully");
        this.empForm.reset();
        this.dialog.close('update');
      },
      error:()=>{
        alert("Error while updating the record");
      }
    })
  }

}
