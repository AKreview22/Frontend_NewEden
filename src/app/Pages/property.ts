import { IpropertyBase } from './IpropertyBase';

export class Property implements IpropertyBase{
  id: number;
  Name: string;
  Type: string;
  Level: number;
  bathroom: number;
  Finished: number;
  Sold: number;
  PriceinEGP: number;
  Areainsqm: number;
  Garden: number;
  Bathrooms: number;
  project_name: string;
  Bedrooms: string
  PropertyImageFileNAme?: string | undefined;//
  image1?: string | undefined;
  image2?: string | undefined;
  image3?: string | undefined;




}
