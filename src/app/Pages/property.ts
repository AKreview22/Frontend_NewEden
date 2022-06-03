import { IpropertyBase } from './IpropertyBase';

export class Property implements IpropertyBase{
  id: number;
  area: number;
  type: string;
  bedroom: number;
  bathroom: number;
  level: number;
  location: string;
  alt: string;
  image?: string | undefined;
  image1?: string | undefined;
  image2?: string | undefined;
  image3?: string | undefined;
  price: number;
  details: string;
  name: string;
  project_name: string;
  status: string

}
