import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/Services/api.service';
import { QueryDialogComponent } from '../query-dialog/query-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-query-result',
  templateUrl: './query-result.component.html',
  styleUrls: ['./query-result.component.scss']
})
export class QueryResultComponent implements OnInit {

  displayedColumns: string[] = ['Level', 'Type', 'sellerID', 'Price', 'Area', 'Date', 'Garden', 'Sold', 'Finished', 'Bathrooms', 'Bedrooms'];
  displayedColumns1: string[] = ['count']
  //displayedColumns: string[] = [ 'Level', 'Type', 'sellerID','minPrice','maxPrice','minArea','maxArea','startDate','EndDate','Garden','Sold','Finished','Bathrooms','Bedrooms'];
  dataSource1!: MatTableDataSource<any>;
  dataSource2!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: ApiService) { }

  ngOnInit(): void {
    this.getResult();
    this.getCount();
  }
  openDialog() {
    this.dialog.open(QueryDialogComponent, {
      width: '30%'
    })/**.afterClosed().subscribe(val=>{
      if(val === 'Saved'){
        this.getAllEmp();
      }
    })**/
  }
  getResult() {
    this.api.getQuer()
      .subscribe({
        next: (res) => {
          console.log(res)
          this.dataSource1 = new MatTableDataSource(res);
          this.dataSource1.paginator = this.paginator;
          this.dataSource1.sort = this.sort;
        },
        error: () => {
          alert("Error while fetching the result")
        }
      })
  }
  getCount(){
    this.api.getCount()
    .subscribe({
      next:(res)=>{
        console.log(res)
        this.dataSource2 = new MatTableDataSource(res);
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue.trim().toLowerCase();

    if (this.dataSource1.paginator) {
      this.dataSource1.paginator.firstPage();
    }
  }

}
