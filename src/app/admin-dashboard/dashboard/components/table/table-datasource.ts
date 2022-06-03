import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TableItem {
  id: number;
  Location:string;
  Bedrooms:number;
  Bathrooms:number;
  Areainsqm:number;
  PriceinEGP:number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TableItem[] = [
  {id: 1,Location:'Mivida, 5th Settlement Compounds', Bedrooms:3,Bathrooms:3,Areainsqm:170,PriceinEGP:2300000},
  {id: 2, Location:'Mivida, 5th Settlement Compounds', Bedrooms:3,Bathrooms:2,Areainsqm:170,PriceinEGP:2356000},
  {id: 3, Location:'Mivida, 5th Settlement Compounds', Bedrooms:3,Bathrooms:3,Areainsqm:170,PriceinEGP:2365000},
  {id: 4, Location:'Mivida, 5th Settlement Compounds', Bedrooms:3,Bathrooms:3,Areainsqm:214,PriceinEGP:4442000},
  {id: 5, Location:'Mivida, 5th Settlement Compounds', Bedrooms:1,Bathrooms:1,Areainsqm:86,PriceinEGP:1550000},
  {id: 6, Location:'Mivida, 5th Settlement Compounds', Bedrooms:1,Bathrooms:1,Areainsqm:86,PriceinEGP:1550000},
  {id: 7, Location:'Mivida, 5th Settlement Compounds', Bedrooms:2,Bathrooms:2,Areainsqm:133,PriceinEGP:1590000},
  {id: 8, Location:'Mivida, 5th Settlement Compounds', Bedrooms:2,Bathrooms:2,Areainsqm:145,PriceinEGP:1700000},
  {id: 9, Location:'Mivida, 5th Settlement Compounds', Bedrooms:3,Bathrooms:3,Areainsqm:197,PriceinEGP:1720000},
  {id: 10, Location:'Mivida, 5th Settlement Compounds', Bedrooms:1,Bathrooms:1,Areainsqm:97,PriceinEGP:1750000},
  {id: 11, Location:'Mivida, 5th Settlement Compounds', Bedrooms:2,Bathrooms:2,Areainsqm:133,PriceinEGP:1750000},
  {id: 12, Location:'Mivida, 5th Settlement Compounds', Bedrooms:3,Bathrooms:3,Areainsqm:217,PriceinEGP:1840000},
  {id: 13, Location:'Mivida, 5th Settlement Compounds', Bedrooms:2,Bathrooms:4,Areainsqm:148,PriceinEGP:1880000},
  {id: 14, Location:'Mivida, 5th Settlement Compounds', Bedrooms:2,Bathrooms:2,Areainsqm:133,PriceinEGP:1881000},
  {id: 15, Location:'Mivida, 5th Settlement Compounds', Bedrooms:2,Bathrooms:2,Areainsqm:133,PriceinEGP:1911000},
  {id: 16, Location:'Mivida, 5th Settlement Compounds', Bedrooms:3,Bathrooms:3,Areainsqm:208,PriceinEGP:1948044},
  {id: 17, Location:'Mivida, 5th Settlement Compounds', Bedrooms:2,Bathrooms:2,Areainsqm:151,PriceinEGP:2000000},
  {id: 18, Location:'Mivida, 5th Settlement Compounds', Bedrooms:2,Bathrooms:2,Areainsqm:132,PriceinEGP:2149000},
  {id: 19, Location:'Mivida, 5th Settlement Compounds', Bedrooms:2,Bathrooms:3,Areainsqm:148,PriceinEGP:2150000},
  {id: 20, Location:'Mivida, 5th Settlement Compounds', Bedrooms:2,Bathrooms:2,Areainsqm:133,PriceinEGP:2200000},
];

/**
 * Data source for the Table view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TableDataSource extends DataSource<TableItem> {
  data: TableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TableItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TableItem[]): TableItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TableItem[]): TableItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'Location': return compare(a.Location, b.Location, isAsc);
        case 'Bedrooms': return compare(+a.Bedrooms, +b.Bedrooms, isAsc);
        case 'Bathrooms': return compare(+a.Bathrooms, +b.Bathrooms, isAsc);
        case 'Areainsqm': return compare(+a.Areainsqm, +b.Areainsqm, isAsc);
        case 'PriceinEGP': return compare(+a.PriceinEGP, +b.PriceinEGP, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
