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
import {DoughnutChartComponent } from './dashboard/components/doughnut-chart/doughnut-chart.component';
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
import { SalesQueryComponent } from './dashboard/components/sales-query/sales-query.component';
import { SalesQueryResultComponent } from './dashboard/components/sales-query-result/sales-query-result.component';
import { PricePredictionComponent } from '../Pages/price-prediction/price-prediction.component';
import { PredictionResultsComponent } from '../Pages/prediction-results/prediction-results.component';
const routes:Routes=[
  {path:"",component:DashboardComponent,
  children:[
    {path:'',component:DashboardSchemaComponent},
    {path:'minicards',component:MiniCardComponent},
    {path:'query',component:QueryDialogComponent},
    {path:'result',component:QueryResultComponent},
    {path:'salesQuery',component:SalesQueryComponent},
    {path:'salesResult',component:SalesQueryResultComponent},
    {path:'pricePrediction',component:PricePredictionComponent},
    {path:'predictionResults',component:PredictionResultsComponent},
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
    DoughnutChartComponent,
    QueryDialogComponent,
    QueryResultComponent,
    SalesQueryComponent,
    SalesQueryResultComponent,
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
