import { AbstractControl, ValidatorFn } from '@angular/forms';

/**
 * custom validator with Regex for valid numbers eg. 10000.00 | 10000,00
 * @returns {[key: string]: any} trigger error validation on component 
 */
export function isValidNumber(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    var pattern = '^[0-9]+([,.][0-9]+)?$';
    var regex = RegExp(pattern);

    const match = regex.test(control.value);
    return match ? null : {'isValidNumber': {value: control.value}};
  };
}