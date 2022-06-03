import { IProperty } from '../../../IProperty.interface';
import { HousingService } from '../../../../Services/housing.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PropertyDetailsService } from 'src/app/Services/property-details.service';
import { ActivatedRoute } from '@angular/router';
import { HostListener , ElementRef} from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { NgxGalleryImage, NgxGalleryOptions , NgxGalleryAnimation } from '@kolkov/ngx-gallery';
import { HomeComponent } from 'src/app/Pages/home/home.component';


@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent implements OnInit {
  @ViewChild('tab') tab: TabsetComponent;
  @Input() property: IProperty;

  PropertyId:any;
  propertyData:any;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  //searchText:string = '';


  constructor(private home:HomeComponent,private param:ActivatedRoute,private service:PropertyDetailsService,
              private el:ElementRef, private housing:HousingService) { }

  @HostListener('click')
  imageChange(){
    var src:any = this.el.nativeElement.src;
    var prev:any = document.getElementById("preview");
    prev.src = src;
  }


  ngOnInit(): void {
    this.PropertyId = this.param.snapshot.paramMap.get('id');
    console.log(this.PropertyId,'getproperty');
    if(this.PropertyId)
    {
      this.propertyData = this.service.propertydetails.filter((value :any)=>{
        return value.id == this.PropertyId;
      });
      console.log(this.propertyData,'propertyData>>')
    }

   /* this.PropertyId =+ this.param.snapshot.params['id'];

    this.param.params.subscribe((params) => {
      this.PropertyId =+params['id'];
      this.housing.getProperty(this.PropertyId).subscribe(
        (data: Property) => {
        this.property.name = data.name
      })
    })*/

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

  /*selectTab(tabId:number){
    this.tab.tabs[tabId].active = true;

  }*/

  //searchText: string='';

  /*onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    console.log(this.searchText);

}*/

}
