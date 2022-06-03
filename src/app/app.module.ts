import { PricepredictionService } from './Services/priceprediction.service';
import { ApiService } from './Services/api.service';



import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { HomeComponent } from './Pages/home/home.component';
import { NavbarComponent } from './SharedPaged/navbar/navbar.component';
import { FooterComponent } from './SharedPaged/footer/footer.component';
import { AnalyzeComponent } from './Pages/analyze/analyze.component';


import { PropertyCardComponent } from './Pages/property/property-card/property-card/property-card.component';
import { PropertyListComponent } from './Pages/property/property-card/property-list/property-list.component';
import { PropertyDetailComponent } from './Pages/property/property-card/property-detail/property-detail/property-detail.component';
import { SellDetailsComponent } from './Pages/sell-details/sell-details.component';
import { PricePredictionComponent } from './Pages/price-prediction/price-prediction.component';
import { PredictionResultsComponent } from './Pages/prediction-results/prediction-results.component';
import { TabsModule} from 'ngx-bootstrap/tabs';

import { allIcons } from 'ngx-bootstrap-icons';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
//import {PaginationControlsComponent} from 'ngx-pagination';


import { FilterPipe } from './Pipe/filter.pipe';
import { SortPipe } from './Pipe/sort.pipe';

import {MatSliderModule} from '@angular/material/slider';

import {MatRadioModule} from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import {MatTabsModule} from '@angular/material/tabs';





import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeDialogComponent } from './Pages/employee-dialog/employee-dialog.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ManagePropertiesComponent } from './Pages/manage-properties/manage-properties.component';
import { PropertiesDialogComponent } from './Pages/properties-dialog/properties-dialog.component';
import { ManageEmployeeComponent } from './Pages/manage-employee/manage-employee.component';
import { ManageConstraintsComponent } from './Pages/manage-constraints/manage-constraints.component';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './Pages/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ConstraintsTableComponent } from './constraints-table/constraints-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AnalyzeComponent,
    ManageEmployeeComponent,
    ManageConstraintsComponent,
    ManagePropertiesComponent,
    LoginComponent,
    HomeComponent,
    PropertyCardComponent,
    PropertyListComponent,
    PropertyDetailComponent,
    FilterPipe,
    SortPipe,
    SellDetailsComponent,
    PricePredictionComponent,
    PredictionResultsComponent,
     EmployeeDialogComponent,
    ManagePropertiesComponent,
    PropertiesDialogComponent,
    ManageEmployeeComponent,
    ManageConstraintsComponent,
    NavbarComponent,
    LoginComponent,
    ConstraintsTableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    NgxBootstrapIconsModule.pick(allIcons),
    TabsModule.forRoot(),
    NgxGalleryModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    //PaginationControlsComponent

    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatRadioModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    NgbModule,
    FlexLayoutModule,
    MatSidenavModule,
 
  ],
  providers: [
    PricepredictionService,
    ApiService
  ],
  bootstrap: [AppComponent],
  entryComponents: [SellDetailsComponent],

    
})
export class AppModule { }
