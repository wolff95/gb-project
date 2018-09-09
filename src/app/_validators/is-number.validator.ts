import { AbstractControl, ValidatorFn } from '@angular/forms';

/*export function ValidateUrl(control: AbstractControl) {
  var pattern = '^[0-9]+[.]{0,1}[0-9]+$'; //Quella giusta
  var pattern1 = '[0-9]+([\.][0-9]{1,2})?';
  var pattern2 = '^[\-]{0,1}[0-9]+[\.]+|[\-]{0,1}[0-9]+$'; //Puoi scrivere tante volte sia ,.,.;
  var regex = RegExp(pattern);
  
  if (regex.test(control.value)) {
    console.log("is a valid number: " + control.value)
    return null;
  }
  return { validUrl: false };
}*/

export function isValidNumber(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    var pattern = '^[0-9]+[.]{0,1}[0-9]+$';
    var regex = RegExp(pattern);

    const match = regex.test(control.value);
    return match ? null : {'isValidNumber': {value: control.value}};
  };
}