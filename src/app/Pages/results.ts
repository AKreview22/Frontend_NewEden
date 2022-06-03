import { IResults } from "./IResults.interface";

export class Results implements IResults {
    id : number;
    averagePrice: number;
    housesQuantity: number;
    maximumPrice: number;
    medianOfPrice: number;
    minimumPrice: number;
    modeOfPrice: number;
    predictedPrice: number;
    priceRange: number

}
