import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any [], filterString: string, propType: string): any [] {

    const resultArray= [];
    if(value.length === 0 || filterString === '' || propType === ''){
      return value;
    }
    for(const item of value){
      if (item[propType].toLocaleLowerCase() === filterString.toLocaleLowerCase()) {
        resultArray.push(item);
  }
    }
    return resultArray;
  }

}
