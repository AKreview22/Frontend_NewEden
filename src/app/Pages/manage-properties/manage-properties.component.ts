import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/Services/api.service';
import { PropertiesDialogComponent } from '../properties-dialog/properties-dialog.component';

import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-manage-properties',
  templateUrl: './manage-properties.component.html',
  styleUrls: ['./manage-properties.component.scss']
})
export class ManagePropertiesComponent implements OnInit {

  displayedColumns: string[] = ['id','Name','Type','Level','Finished','Sold','PriceinEGP','Areainsqm','Garden','Bathrooms','Bedrooms','PropertyImageFileNAme','sellerID_id','Date','action' ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog:MatDialog,private api:ApiService) { }

  ngOnInit(): void {
    this.getAllProp();
  }
  openDialog(){
    this.dialog.open(PropertiesDialogComponent,{
      width: '30%'
  }).afterClosed().subscribe(val=>{
    if(val === 'saved'){
      this.getAllProp();
    }
  })

}
getAllProp(){
  this.api.getProp()
  .subscribe({
    next:(res)=>{
      this.dataSource=new MatTableDataSource(res);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    },
    error:(err)=>{
      alert("Error while fetching data!!")
    }
  })
}
editProp(row :any){
  this.dialog.open(PropertiesDialogComponent,{
    width:'30%',
    data:row
  }).afterClosed().subscribe(val=>{
    if(val === 'updated'){
      this.getAllProp();
    }
  })
}
deleteProp(id:number){
  this.api.deleteProp(id)
  .subscribe({
    next:(res)=>{
      alert("Property deleted successfully");
      this.getAllProp();
    },
    error:()=>{
      alert("Error while deleting the property !!");
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

}
