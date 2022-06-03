import { HttpClientModule, HttpHeaders } from '@angular/common/http';
 import {HttpClient}   from '@angular/common/http';
//import { global } from ' ../_models/global';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
const endpoint = 'https://jsonplaceholder.typicode.com/posts';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailsService {

  public search = new BehaviorSubject<string>("");

  constructor( private httpService: HttpClientModule, private http: HttpClient){ }

  /*getAllProperties(): Observable<any> {
    return this.http.get(endpoint);
  }*/

  getAllProperties(): Observable<any> {
    return this.http.get<any>("http://localhost:3000/propertyDetails");
  }


  //propertDetails
  propertydetails = [
    {
      id:1,
      area:'50m',
      type:"Studio",
      bedroom:0,
      bathroom:1,
      level:1,
      location:"North Coast",
      alt:"North Coast",
      image: "../../assets/NC.jpg",
      image1:"../../assets/6thOct.jpg",
      image2:"../../assets/AinSokhna.jpg",
      image3:"../../assets/ShoroukCity.jpg",
      price:'1,500,000 EGB',
      details:'About Details Of Selling A Twin House 307m In Zoya Ghazala Bay North Coast',
      name:'Twin House in Sokhna'

  },
  {
      id:2,
      area:'70m',
      type:"Flat",
      bedroom:1,
      bathroom:1,
      level:2,
      location:"Shorouk City",
      alt:"Shorouk City",
      image: "../../assets/ShoroukCity.jpg",
      image1:"../../assets/6thOct.jpg",
      image2:"../../assets/AinSokhna.jpg",
      image3:"../../assets/ShoroukCity.jpg",
      price:'1,500,000 EGB',
      details:'About Details Of Selling A Twin House 307m In Zoya Ghazala Bay North Coast',
      name:'Twin House in Sokhna'

  },
  {
      id:3,
      area:'200m',
      type:"Duplix",
      bedroom:3,
      bathroom:2,
      level:3,
      location:"New Cairo",
      alt:"New Cairo",
      image: "../../assets/NCairo.jpg",
      image1:"../../assets/6thOct.jpg",
      image2:"../../assets/AinSokhna.jpg",
      image3:"../../assets/ShoroukCity.jpg",
      price:'1,500,000 EGB',
      details:'About Details Of Selling A Twin House 307m In Zoya Ghazala Bay North Coast',
      name:'Twin House in Sokhna'

  },
  {
      id:4,
      area:'110m',
      type:"Flat",
      bedroom:1,
      bathroom:3,
      level:4,
      location:"Mostakbal City",
      alt:"Mostakbal City",
      image: "../../assets/MostakbalCity.jpg",
      image1:"../../assets/6thOct.jpg",
      image2:"../../assets/AinSokhna.jpg",
      image3:"../../assets/ShoroukCity.jpg",
      price:'1,500,000 EGB',
      details:'About Details Of Selling A Twin House 307m In Zoya Ghazala Bay North Coast',
      name:'Twin House in Sokhna'

  },
  {
      id:5,
      area:'70m',
      type:"Flat",
      bedroom:2,
      bathroom:1,
      level:1,
      location:"Shorouk City",
      alt:"Shorouk City",
      image: "../../assets/ShoroukCity.jpg",
      image1:"../../assets/6thOct.jpg",
      image2:"../../assets/AinSokhna.jpg",
      image3:"../../assets/ShoroukCity.jpg",
      price:'1,500,000 EGB',
      details:'About Details Of Selling A Twin House 307m In Zoya Ghazala Bay North Coast',
      name:'Twin House in Sokhna'

  },
  {
      id:6,
      area:'200m',
      type:"Duplix",
      bedroom:3,
      bathroom:2,
      level:2,
      location:"6th October",
      alt:"6th October",
      image: "../../assets/6thOct.jpg",
      image1:"../../assets/6thOct.jpg",
      image2:"../../assets/AinSokhna.jpg",
      image3:"../../assets/ShoroukCity.jpg",
      price:'1,500,000 EGB',
      details:'About Details Of Selling A Twin House 307m In Zoya Ghazala Bay North Coast',
      name:'Twin House in Sokhna'

  },
  {
    id:7,
    area:'300m',
    type:"Vila",
    bedroom:4,
    bathroom:5,
    level:3,
    location:"Al Ain Al Sokhna",
    alt:"Al Ain Al Sokhna",
    image: "../../assets/AinSokhna.jpg",
    image1:"../../assets/6thOct.jpg",
    image2:"../../assets/AinSokhna.jpg",
    image3:"../../assets/ShoroukCity.jpg",
    price:'1,500,000 EGB',
    details:'About Details Of Selling A Twin House 307m In Zoya Ghazala Bay North Coast',
    name:'Twin House in Sokhna'

},
{
  id:8,
  area:'70m',
  type:"Flat",
  bedroom:2,
  bathroom:1,
  level:4,
  location:"New Heliopolis City",
  alt:"New Heliopolis City",
  image: "../../assets/NewHeliopolis.jpg",
  image1:"../../assets/6thOct.jpg",
  image2:"../../assets/AinSokhna.jpg",
  image3:"../../assets/ShoroukCity.jpg",
  price:'1,500,000 EGB',
  details:'About Details Of Selling A Twin House 307m In Zoya Ghazala Bay North Coast',
  name:'Twin House in Sokhna'

}
  ]

}
