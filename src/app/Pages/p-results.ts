import { IResults } from "./IResults.interface";
export class PResults  implements IResults{
    id : number;
    area_sqm : number;
    type_name: string;
    bedrooms: number;
    bathrooms: number;
    location_name: string;
   

}
