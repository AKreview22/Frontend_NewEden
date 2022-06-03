import { ActivatedRoute, Router } from '@angular/router';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Property } from 'src/app/Pages/property';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { ApiService } from 'src/app/Services/api.service';
import { FormGroup , FormBuilder , Validators } from '@angular/forms';

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
  propertyForm !: FormGroup;


  constructor(private route:ActivatedRoute, private router:Router,
              private el:ElementRef, private api : ApiService,
              private formBuilder : FormBuilder) {}

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
    this.propertyForm = this.formBuilder.group({
      deposit : ['',Validators.required],
      years: ['',Validators.required],
      monthly: ['',Validators.required],
      overallPrice: ['',Validators.required],
      deliverDate: ['',Validators.required],
      equalInstall: [false]
    })
    this.getSellDetails();
  }


  //BACK TO PREVIOUS PAGE FUNCTION
  onBack(){
    this.router.navigate(['/']);
  }

  //NEXT PAGE FUNCTION
  onSelectNext(){
    this.propertyId+=1;
    this.router.navigate(['property-detail' , this.propertyId]);
  }

  onSale(){
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
  }

  getSellDetails(){
    this.api.getSellData().subscribe({
      next : (res)=>{
        console.log(res);
      },
       error:(err)=>{
        alert("Error while fetching data")
      }
    })
  }




}
