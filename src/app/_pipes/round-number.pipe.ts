import { Pipe, PipeTransform } from '@angular/core';

// CustomNumberPipe: purpose:
// 1. null check
// 2. type of number check
// 3. set number max of decimals digits
@Pipe({name: 'roundNumber'})
export class RoundNumberPipe implements PipeTransform {
  transform(val: string, decimalDigits: number): any {
    //Regex rule
    var pattern = '^[0-9]+[.|,]{0,1}[0-9]+$';
    var regex = RegExp(pattern);

    //If not match it isn't a number.
    //Return the number as-is and show the error
    const match = regex.test(val.toString());
    if(!match){
      return val;
    }

    //Parse the val from string to number
    let value = parseFloat(val);
    console.log(value);

    //Round number till the decimalDigits (2 --> 0.01)
    let multiplier = Math.pow(10, decimalDigits);
    let displayValue = Math.round(value * multiplier) / multiplier;

    //If the number has decimals, display as much zero as needed.
    // let isDecimals = displayValue.toString().split(".")[1] ? true : false;
    // if(isDecimals)
      return displayValue.toFixed(decimalDigits);

    // return displayValue;
  }
}