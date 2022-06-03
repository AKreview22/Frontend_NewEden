import { ApiService } from 'src/app/Services/api.service';
import { HousingService } from './../../../../Services/housing.service';
import { IProperty } from './../../../IProperty.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  /*[
    {
      "id":1,
      "name":'Twin House in Sokhna',
      "type":"House",
      "price":12000
    },
    {
      "id":2,
      "name":'Villa in North Coast',
      "type":"Villa",
      "price":12000
    },
    {
      "id":3,
      "name":'Studio in 6th October',
      "type":"Studio",
      "price":12000
    },
    {
      "id":4,
      "name":'Twin House in Sokhna',
      "type":"House",
      "price":12000
    },
    {
      "id":5,
      "name":'Twin House in Sokhna',
      "type":"House",
      "price":12000
    },
    {
      "id":6,
      "name":'Twin House in Sokhna',
      "type":"House",
      "price":'2,000,000'
    },
    {
      "id":7,
      "name":'Twin House in Sokhna',
      "type":"House",
      "price":15000
    },
    {
      "id":8,
      "name":'Twin House in Sokhna',
      "type":"House",
      "price":12000
    },
    {
      "id":9,
      "name":'Twin House in Sokhna',
      "type":"House",
      "price":12300
    },
  ]*/

  properties: Array<IProperty>;
  constructor(private api: ApiService,private housingService: HousingService) { }

  ngOnInit(): void {
    this.api.getAllProperties().subscribe(data => {
      this.properties = data;
      console.log(data);
    },
    error => {
      console.log(error);
    })
  }

}
