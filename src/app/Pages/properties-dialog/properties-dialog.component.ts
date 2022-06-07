import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ManagePropertiesComponent } from '../manage-properties/manage-properties.component';
@Component({
  selector: 'app-properties-dialog',
  templateUrl: './properties-dialog.component.html',
  styleUrls: ['./properties-dialog.component.scss']
})
export class PropertiesDialogComponent implements OnInit {
  images: string[] = [];
  imageSrc: string = '';
  propForm !: FormGroup;
  actionBtn: string = "Save";
  constructor(private formBuilder: FormBuilder, private api: ApiService, @Inject(MAT_DIALOG_DATA) public editData: any, private dialogRef: MatDialogRef<ManagePropertiesComponent>) { }

  ngOnInit(): void {
    this.propForm = this.formBuilder.group({
      id: [''],
      Name: ['', Validators.required],
      Type: ['', Validators.required],
      Level: ['', Validators.required],
      Sold: ['', Validators.required],
      Finished: ['', Validators.required],
      PriceinEGP: ['', Validators.required],
      Areainsqm: ['', Validators.required],
      Garden: ['', Validators.required],
      Bathrooms: ['', Validators.required],
      Bedrooms: ['', Validators.required],
      sellerID: [''],
      Date: [''],

      PropertyImageFileNAme: [''],

      fileSource: ['']
    });

    if (this.editData) {
      this.actionBtn = "Update";
      this.propForm.controls['id'].setValue(this.editData.id);
      this.propForm.controls['Name'].setValue(this.editData.Name);
      this.propForm.controls['Type'].setValue(this.editData.Type);
      this.propForm.controls['Level'].setValue(this.editData.Level);
      this.propForm.controls['Finished'].setValue(this.editData.Finished);
      this.propForm.controls['Sold'].setValue(this.editData.Sold);
      this.propForm.controls['PriceinEGP'].setValue(this.editData.PriceinEGP);
      this.propForm.controls['Areainsqm'].setValue(this.editData.Areainsqm);
      this.propForm.controls['Garden'].setValue(this.editData.Garden);
      this.propForm.controls['Bathrooms'].setValue(this.editData.Bathrooms);
      this.propForm.controls['Bedrooms'].setValue(this.editData.Bedrooms);
      this.propForm.controls['sellerID'].setValue(this.editData.sellerID);
      this.propForm.controls['Date'].setValue(this.editData.Date);

    }
  }



  onFileChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.onload = (event: any) => {
          console.log(event.target.result);
          this.images.push(event.target.result);

          this.propForm.patchValue({
            fileSource: this.images
          });
        }

        reader.readAsDataURL(event.target.files[i]);
      }
    }
    /**const reader = new FileReader();
     
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
     
      reader.onload = () => {
    
        this.imageSrc = reader.result as string;
      
        this.myForm.patchValue({
          fileSource: reader.result
        });
    
      };
    
    }*/
  }


  addProp() {
    if (!this.editData) {
      if (this.propForm.valid) {
        this.api.postProp(this.propForm.value)
          .subscribe({
            next: (res) => {
              console.log(res);

              alert("Property added successfully");
              this.propForm.reset();
              this.dialogRef.close('saved');
            },
            error: () => {
              alert("Error while adding property")
            }
          })
      }
    } else {
      this.updateProperty();
    }
  }
  updateProperty() {
    this.api.putProp(this.propForm.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert("Property updated successfully")
          this.propForm.reset();
          this.dialogRef.close('updated');
        },
        error: () => {
          alert("Error while updating property!!")
        }
      })
  }



}
