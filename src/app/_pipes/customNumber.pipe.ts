import { Pipe, PipeTransform } from '@angular/core';

//CustomNumberPipe: purpose:
// 1. null check
// 2. type of number check
// 3. set number max of decimals digits
@Pipe({name: 'customNumber'})
export class CustomNumberPipe implements PipeTransform {
  transform(value: number, maxDecimalsDigits: string): any {
    if(value === null || this.isNumber(value))
      return undefined;

    let decimalDigits = parseFloat(maxDecimalsDigits);
    return + value.toFixed(decimalDigits);
  }

  isNumber(val: any){
    return isNaN(parseFloat(val))
  }
}