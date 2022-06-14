import { SellDetailsComponent } from './../../../../sell-details/sell-details.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Property } from 'src/app/Pages/property';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { ApiService } from 'src/app/Services/api.service';
import { FormGroup , FormBuilder , Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {

  public propertyId:number;
  property = new Property();
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];


  yearsList = ["3 Years", "5 Years" , "7 Years" , "10 Years"];
  res : Array<any>[];


  constructor(private route:ActivatedRoute, private router:Router,
              private el:ElementRef, private api : ApiService,
              private formBuilder : FormBuilder,private dialog:MatDialog) {}

  imageChange(){
    var src:any = this.el.nativeElement.src;
    var prev:any = document.getElementById("preview");
    prev.src = src;
  }

  ngOnInit() {
    this.propertyId = +this.route.snapshot.params['id'];

    this.route.params.subscribe(
      (params) => {
        this.propertyId = +params['id'];
        this.api.getProperty(this.propertyId).subscribe(
          (data : Property) => {
            this.property = data;
          }
        )
      }
    )
    this.galleryOptions = [
      {
        width: '100%',
        height: '500px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: true
      }
    ];

    this.galleryImages = [
      {
        small: '../../../assets/h1.jpg',
        medium: '../../../assets/h1.jpg',
        big: '../../../assets/h1.jpg'
      },
      {
        small: '../../../assets/h4.jpg',
        medium: '../../../assets/h4.jpg',
        big: '../../../assets/h4.jpg'
      },
      {
        small: '../../../assets/h1.jpg',
        medium: '../../../assets/h1.jpg',
        big: '../../../assets/h1.jpg'
      },{
        small: '../../../assets/h5.jpg',
        medium: '../../../assets/h5.jpg',
        big: '../../../assets/h5.jpg'
      },
      {
        small: '../../../assets/h3.jpg',
        medium: '../../../assets/h3.jpg',
        big: '../../../assets/h3.jpg'
      }
    ];



  }


  openDialog(){
    this.dialog.open(SellDetailsComponent,{
      width: '30%'
    }).afterClosed().subscribe(val=>{
      if(val === 'Saved'){
        this.getCalc();
      }
    })
  }


  getCalc(){
  this.api.getCalcPayment().subscribe({
    next:(res) => {
      this.res = res;
    }
  })
}

/*onSale(){
    if(this.propertyForm.valid){
      this.api.postSellData(this.propertyForm.value).subscribe({
        next:(res)=>{
          alert("Property Has Been Selled Successfully!");
          this.propertyForm.reset();
          //this.dialogRef.close('Sell Successfully');
        },
        error:()=>{
          alert("Error Happened While Selling the Property")
        }
      })
    }
    this.api.postSellData(this.res).subscribe({
      next:(res)=>{
      alert("Property Has Been Selled Successfully!");
      },error:()=>{
        alert("Error Happened!")
      }

    })
  }*/

  onSale(){
    this.api.postSellData(this.res).subscribe({
      next:(res)=>{
        alert("Property Has Been Selled Sucessfully!")
      },error:()=>{
        alert("error while Selling property!")
      }
    })
  }





}
