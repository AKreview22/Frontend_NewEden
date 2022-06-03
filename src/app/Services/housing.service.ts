import { IProperty } from './../Pages/IProperty.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Property } from '../Pages/property';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http:HttpClient) { }

getProperty(id: number){
  return this.getAllProperties().pipe(
    map(propertiesArray=> {
      return propertiesArray.find(p=>p.id === id);
    })
  );
}
getAllProperties(): Observable<Property[]>{
  return this.http.get("http://localhost:3000/propertyDetails").pipe(
    map( data => {
      const propertiesArray: Array<Property> = [];
      for( const id in data){
        if(data.hasOwnProperty(id)){
        propertiesArray.push(data[id]);
      }
    }
    return propertiesArray;
    })
  );
}

}
