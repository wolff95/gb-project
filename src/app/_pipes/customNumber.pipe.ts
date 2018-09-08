import { Pipe, PipeTransform } from '@angular/core';

// CustomNumberPipe: purpose:
// 1. null check
// 2. type of number check
// 3. set number max of decimals digits
@Pipe({name: 'roundNumber'})
export class RoundNumberPipe implements PipeTransform {
  transform(value: number, maxDecimalsDigits: number): any {
    if(value === null || this.isNumber(value))
      return value;

    let decimalDigits = maxDecimalsDigits;
    let multiplier = Math.pow(10, decimalDigits);
    let displayValue = Math.round(value * multiplier) / multiplier;

    let displayValueDecimalsLength = displayValue.toString().split(".")[1] ? displayValue.toString().split(".")[1].length : 0;
    if(displayValueDecimalsLength > 0)
        return displayValue.toFixed(maxDecimalsDigits)

    return displayValue;
  }

  isNumber(val: any){
    return isNaN(parseFloat(val))
  }
}