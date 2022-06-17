import { ActivatedRoute, Router } from '@angular/router';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Property } from 'src/app/Pages/property';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { ApiService } from 'src/app/Services/api.service';
import { FormGroup , FormBuilder , Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {

  displayedColumns: string[] = ['cash_price','added_expenses','grand_total_with_interest',
  'monthly_installment','receiving_date'];
  dataSource!: MatTableDataSource<any>;

  public propertyId:number;
  property = new Property();
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  sellerID:Array<any>[];


  yearsList = [3, 5 , 7, 10];
  propertyForm !: FormGroup;
  res : Array<any>[];


  constructor(private route:ActivatedRoute, private router:Router,
              private el:ElementRef, private api : ApiService,
              private formBuilder : FormBuilder,private dialog:MatDialog,private auth:AuthService) {}

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



      this.sellerID=[this.auth.GetIDByToken(this.auth.getToken()),this.propertyId]
       this.propertyForm = this.formBuilder.group({
      deposit : ['',Validators.required],
      years: ['',Validators.required],
      propid:[this.propertyId]
      })

  }




  onCalc(){
    if(this.propertyForm.valid){
      this.api.postCalcPayment(this.propertyForm.value).subscribe({
        next:(res)=>{
        },

        error:()=>{
          alert("Error Happened While Selling the Property")
        }

      });
      this.getCalc();

    }
  }

  getCalc(){
    this.api.getCalcPayment()
    .subscribe({
      next:(res:any)=>{
        this.dataSource=new MatTableDataSource(res);
      },
      error:(err)=>{
        alert("Error while calculating the data!!")
      }
    })
  }




  onSell(){
    console.log(this.sellerID)
    this.api.postSellData(this.sellerID).subscribe({
      next:(res)=>{
        alert("Property Has Been Selled Sucessfully!")
      },error:()=>{
        alert("error while Selling property!")
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


}
