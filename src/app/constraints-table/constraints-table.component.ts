import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-constraints-table',
  templateUrl: './constraints-table.component.html',
  styleUrls: ['./constraints-table.component.scss']
})
export class ConstraintsTableComponent implements OnInit {

  displayedColumns: string[] = ['Maximum Years', 'Interest', 'Minimum Deposite', 'Additional Expenses', 'Amount paid before delivery','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getAllConst();
  }
  getAllConst() {
    this.api.getCons()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
          alert("Error while fetching the data!!")
        }
      })
  }
  deleteConst(id: number) {
    this.api.deleteCons(id)
      .subscribe({
        next: (res) => {
          alert("Constraint deleted Successfully")
          this.getAllConst();
        },
        error: () => {
          alert("Error while deleting the record")
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
