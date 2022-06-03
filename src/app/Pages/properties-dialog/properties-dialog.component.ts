import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder,Validators} from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';
import { MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ManagePropertiesComponent } from '../manage-properties/manage-properties.component';
@Component({
  selector: 'app-properties-dialog',
  templateUrl: './properties-dialog.component.html',
  styleUrls: ['./properties-dialog.component.scss']
})
export class PropertiesDialogComponent implements OnInit {

  propForm !:FormGroup;
  actionBtn : string="Save";
  constructor(private formBuilder: FormBuilder,
    private api:ApiService,
    @Inject(MAT_DIALOG_DATA)public editData: any,
    private dialogRef:MatDialogRef<ManagePropertiesComponent>) { }

  ngOnInit(): void {
    this.propForm=this.formBuilder.group({
      propNum:['',Validators.required],
      bathrooms:['',Validators.required],
      garden:[false],
      level:['',Validators.required],
      area:['',Validators.required],
      price:['',Validators.required]
    });

    if(this.editData){
      this.actionBtn="Update";
      this.propForm.controls['propNum'].setValue(this.editData.propNum);
      this.propForm.controls['bathrooms'].setValue(this.editData.bathrooms);
      this.propForm.controls['garden'].setValue(this.editData.garden);
      this.propForm.controls['level'].setValue(this.editData.level);
      this.propForm.controls['area'].setValue(this.editData.area);
      this.propForm.controls['price'].setValue(this.editData.price);
    }
  }
  addProp(){
    if(!this.editData){
      if(this.propForm.valid){
        this.api.postProp(this.propForm.value)
        .subscribe({
          next:(res)=>{
            alert("Property added successfully");
            this.propForm.reset();
            this.dialogRef.close('saved');
          },
          error:()=>{
            alert("Error while adding property")
          }
        })
      }
    }else{
      this.updateProperty();
    }
  }
updateProperty(){
  this.api.putProp(this.propForm.value,this.editData.id)
  .subscribe({
    next:(res)=>{
      alert("Property updated successfully")
      this.propForm.reset();
      this.dialogRef.close('updated');
    },
    error:()=>{
      alert("Error while updating property!!")
    }
  })
}
}
