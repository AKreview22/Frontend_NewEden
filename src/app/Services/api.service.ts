
import { IResults } from './../Pages/IResults.interface';
import { IProperty } from './../Pages/IProperty.interface';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Property } from '../Pages/property';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
/*testing , Hello ya gama3a *

/**export interface dataSetItems{
   id: number,
  Name: string,
  PriceinEGP:number,
  Type:string,
  Bedrooms:number,
  Bathrooms:number,
  Areainsqm:number,
  Location:string,
  Level:number,
  Garden:number,
  Comments:string,
  Sold:number,
  Finished:number,
  sellerID:number,
  Date:Date,
}*/

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  readonly APIUrl = "http://127.0.0.1:8000";
  readonly PhotoUrl = "http://127.0.0.1:8000/media/";
  private baseUrl = 'http://127.0.0.1:8000/EdenApp/pieChart/';

  postEmp(data: any) {
    return this.http.post("http://127.0.0.1:8000/Home/register/", data);
  }
  getEmp() {
    return this.http.get<any>("http://127.0.0.1:8000/EdenManageProperty/employee/");
  }
  putEmp(data: any, id: number) {
    return this.http.put<any>("http://127.0.0.1:8000/EdenManageProperty/employee/" + id, data);
  }
  deleteEmp(id: number) {
    return this.http.delete<any>("http://127.0.0.1:8000/EdenManageProperty/employee/" + id);
  }

  UploadPhoto(val: any) {
    return this.http.post(this.APIUrl + '/SaveFile', val);
  }
  postProp(data: any) {
    return this.http.post<any>("http://127.0.0.1:8000/EdenManageProperty/addproperty/", data);
  }
  getProp() {
    return this.http.get<any>("http://127.0.0.1:8000/EdenManageProperty/property/");
  }
  putProp(data: any, id: number) {
    return this.http.put<any>("http://127.0.0.1:8000/EdenManageProperty/property/" + id, data);
  }
  deleteProp(id: number) {
    return this.http.delete<any>("http://127.0.0.1:8000/EdenManageProperty/property/" + id);
  }
  postCons(data: any) {
    return this.http.post<any>("http://127.0.0.1:8000/Home/addConstraints/", data);
  }
  getCons() {
    return this.http.get<any>("http://127.0.0.1:8000/Home/viewConstraints/");
  }
  putCons(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/Constraints/" + id, data);
  }
  deleteCons(id: number) {
    return this.http.delete<any>("http://localhost:3000/Constraints/" + id);
  }
  postQuer(data: any) {
    return this.http.post<any>("http://localhost:3000/queries/", data);
  }
  putQuer(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/queries" + id, data);
  }
  getQuer() {
    return this.http.get<any>("http://localhost:3000/queries/");
  }
  postFilterQuer(data: any) {
    return this.http.post<any>("http://localhost:3000/filterqueries/", data);
  }
  putFilterQuer(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/filterqueries" + id, data);
  }
  getfilterQuer() {
    return this.http.get<any>("http://localhost:3000/filterqueries/");
  }

  getdatset() {
    return this.http.get<any>("http://localhost:3000/dataset");
  }
  getData() {
    return this.http.get<any>("http://localhost:3000/data");
  }
  getCount() {
    return this.http.get<any>("http://localhost:3000/count");
  }
  getSum() {
    return this.http.get<any>("http://localhost:3000/sum");
  }
  postSellData(data: any) {
    return this.http.post<any>("http://localhost:3000/sellDetails/", data);
  }

  getSellData() {
    return this.http.get<any>("http://localhost:3000/sellDetails");
  }

  getProperty(id: number) {
    return this.getAllProperties().pipe(
      map(propertiesArray => {
        return propertiesArray.find(p => p.id === id);
      })
    );
  }
  getAllProperties(): Observable<Property[]> {
    return this.http.get('http://127.0.0.1:8000/EdenManageProperty/property/').pipe(
      map(data => {
        const propertiesArray: Array<Property> = [];
        for (const id in data) {
          if (data.hasOwnProperty(id)) {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
  }

  /*postPredictionDetails(details: any){
    return this.http.post<any>("http://localhost:3000/predictionDetails", details)
  }*/
  getPredictionResults(): Observable<IResults[]> {
    return this.http.get('http://localhost:3000/predictionDetails').pipe(
      map(res => {
        const resultsArray: Array<IResults> = [];
        for (const id in res) {
          resultsArray.push(res[id]);
        }
        return resultsArray;
      })
    );
  }

  getResult(area: number) {
    return this.getPredictionResults().pipe(
      map(resultsArray => {
        return resultsArray.find(r => r.area === area)
      })
    );
  }

  postPredictionResults(data: any) {
    return this.http.post<any>("http://localhost:3000/predictionDetails", data);
  }
  cryptoData() {
    const url = `${this.baseUrl}`;
    return this.http
      .get(url, httpOptions)
      .toPromise()
      .then((data) => {
        return data;
      });
  }

  /*results(){
    return this.http.get('http://localhost:3000/predictionResults')
  }*/
}
