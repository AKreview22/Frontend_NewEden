import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/Services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FilterQueryComponent } from '../filter-query/filter-query.component';

@Component({
  selector: 'app-filter-query-result',
  templateUrl: './filter-query-result.component.html',
  styleUrls: ['./filter-query-result.component.scss']
})
export class FilterQueryResultComponent implements OnInit {
  displayedColumns: string[] = [ 'sellerID','count','sum'];
  displayedColumns1: string[] = ['totalSum'];

  dataSource1!: MatTableDataSource<any>;
  dataSource2!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private dialog: MatDialog, private api: ApiService) { }

  ngOnInit(): void {
    this.getResult();
    this.getSum();
  }
  openDialog() {
    this.dialog.open(FilterQueryComponent, {
      width: '30%'
    })/**.afterClosed().subscribe(val=>{
      if(val === 'Saved'){
        this.getAllEmp();
      }
    })**/
  }
  getResult() {
    this.api.getfilterQuer()
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
  getSum(){
    this.api.getSum()
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
