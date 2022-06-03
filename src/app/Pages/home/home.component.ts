import { Component, OnInit , EventEmitter, Output , ViewChild } from '@angular/core';
import { HousingService } from 'src/app/Services/housing.service';
//import { PropertyDetailsService } from 'src/app/Services/property-details.service';
import { IProperty } from '../IProperty.interface';
//import { FilterPipe } from 'src/app/Pipe/filter.pipe';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ApiService } from 'src/app/Services/api.service';
import { MatTableDataSource } from '@angular/material/table';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  properties: Array<IProperty>;
  type = '';
  searchType = '';
  SortbyParam = '';
  sortDirection = 'desc';

  propertyArray: Array<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any>;


  constructor(private housingService: HousingService , private api : ApiService) { }

  totalLength: number;
  page: number = 1;

  ngOnInit(): void {

    this.housingService.getAllProperties().subscribe(data => {
      this.properties = data;

      this.totalLength = data.length;

      console.log(data);
    },
    error => {
      console.log(error);
    }


    );

    this.getAllProperties();

    /*
    this.featuredLocations = this.service.location;
    this.images = this.service.images;
  }*/
  }

  getAllProperties(){
    this.api.getAllProperties().subscribe({
      next:(res)=>{
        this.propertyArray
        this.paginator = this.paginator;
            },
      error:(err)=>{
        alert("Error While Fetching Data!!");
      }
    })

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onTypeFilter(){
    this.searchType = this.type;
  }

  onTypeFilterClear(){
    this.searchType= '';
    this.type='';
  }


}
