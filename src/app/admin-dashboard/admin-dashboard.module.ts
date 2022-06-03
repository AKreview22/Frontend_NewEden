import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { DashboardSchemaComponent } from './dashboard/components/dashboard-schema/dashboard-schema.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { CardComponent } from './dashboard/components/card/card.component';
import { LineChartComponent } from './dashboard/components/line-chart/line-chart.component';
import { BarChartComponent } from './dashboard/components/bar-chart/bar-chart.component';
import { PieChartComponent } from './dashboard/components/pie-chart/pie-chart.component';
import { TableComponent } from './dashboard/components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MiniCardComponent } from './dashboard/components/mini-card/mini-card.component';
import { DounghtChartComponent } from './dashboard/components/dounght-chart/dounght-chart.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { QueryDialogComponent } from './dashboard/components/query-dialog/query-dialog.component';
import { QueryResultComponent } from './dashboard/components/query-result/query-result.component';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FilterQueryComponent } from './dashboard/components/filter-query/filter-query.component';
import { FilterQueryResultComponent } from './dashboard/components/filter-query-result/filter-query-result.component';

const routes:Routes=[
  {path:"",component:DashboardComponent,
  children:[
    {path:'',component:DashboardSchemaComponent},
    {path:'minicards',component:MiniCardComponent},
    {path:'query',component:QueryDialogComponent},
    {path:'result',component:QueryResultComponent},
    {path:'filterQuery',component:FilterQueryComponent},
    {path:'filterResult',component:FilterQueryResultComponent}
  ]
}
]

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardSchemaComponent,
    CardComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
    TableComponent,
    MiniCardComponent,
    DounghtChartComponent,
    QueryDialogComponent,
    QueryResultComponent,
    FilterQueryComponent,
    FilterQueryResultComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
  ]
})
export class AdminDashboardModule { }
