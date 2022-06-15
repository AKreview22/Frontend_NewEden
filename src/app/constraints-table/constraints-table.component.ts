import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-constraints-table',
  templateUrl: './constraints-table.component.html',
  styleUrls: ['./constraints-table.component.scss']
})
export class ConstraintsTableComponent implements OnInit {

  displayedColumns: string[] = ['maxYears', 'Interest', 'minDeposit', 'addExpenses', 'paidBeforeDelivery','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private api: ApiService,private router:Router) { }

  ngOnInit(): void {
    this.getAllConst();
  }
  getAllConst() {
    this.api.getCons()
      .subscribe({
        next: (res) => {
          console.log(res)
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
          alert("Error while fetching the data!!")
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

  addConst(){
    this.router.navigateByUrl("/admin-dashboard/constraints")
  }
}
