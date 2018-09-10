import { Pipe, PipeTransform } from '@angular/core';

  /**
   * Used in the input-component when the checkbox round is checked
   * @param {string} val
   * @param {number} decimalDigits
   * @return {string} formatted eg. 100000.00
   */
@Pipe({name: 'roundNumber'})
export class RoundNumberPipe implements PipeTransform {
  transform(val: string, decimalDigits: number): any {
    var pattern = '^[0-9]+([,.][0-9]+)?$';
    var regex = RegExp(pattern);
    if(!val)
      return null;
      
    const match = regex.test(val.toString());
    if(!match){
      return val;
    }

    let value = parseFloat(val);

    let multiplier = Math.pow(10, decimalDigits);
    let displayValue = Math.round(value * multiplier) / multiplier;

    return displayValue.toFixed(decimalDigits);
  }
}