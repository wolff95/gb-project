import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {FormControl, FormGroupDirective, NgForm, Validators, ValidatorFn, AbstractControl } from "@angular/forms";
import { VatRateService } from "../_services/vat-rate.service";
import { RoundNumberPipe } from '../_pipes/round-number.pipe';
import { isValidNumber } from "../_validators/is-number.validator"

@Component({
  selector: "gb-input",
  templateUrl: "./gb-input.component.html",
  styleUrls: ["./gb-input.component.scss"]
})
export class GbInputComponent{
  @Input() inputObj: any;

  minValue:number = 0.000000000001;
  formControl = new FormControl('', [Validators.required, Validators.min(this.minValue), isValidNumber()]);

  constructor(private vatRateService: VatRateService, private roundNumberPipe: RoundNumberPipe) {
    vatRateService.isChangedStream.subscribe(() => {
      //If vatRate is selected enable the input
      vatRateService.vatRate ? this.formControl.enable() : this.formControl.disable()

      if(this.inputObj && this.vatRateService[this.inputObj.constName]) {
        //Set the value, rounded if the round is checked and if the user isn't typing anymore
        let value = vatRateService.round && vatRateService.lastChangedValue != this.inputObj.constName ? 
        roundNumberPipe.transform(this.vatRateService[this.inputObj.constName], 2) : 
        this.vatRateService[this.inputObj.constName];

        this.formControl.patchValue(value);
      }
    })
  }

  onValChange(val: string, event) {
    let handlingZero = this.handleDecimalZeros(val, event);

    let value = parseFloat(val.replace(',', '.'));
    if(value && value !== 0 && !handlingZero){
      this.vatRateService.changeValue(value, this.inputObj.constName);
    }
  }

  //Round the input where the user was typing
  onBlurChange(val: string){
    if(this.vatRateService.round){
    let value = this.roundNumberPipe.transform(val, 2)
    this.formControl.patchValue(value);
    }
  }

  //If the user type ',' '.' we have to not recalculate.
  //If the user is typing 0 after ',' '.' we have to not recalculate.
  handleZeros:boolean;
  oldValue:string;
  handleDecimalZeros(val: string, event){
    this.handleZeros = true;

    //if the user change the number with significative numbers
    if(this.oldValue){
    let valuableOldValue = parseFloat(this.oldValue.replace(',', '.'))
    let valuableNewValue = parseFloat(val.replace(',', '.'))
    if(valuableOldValue != valuableNewValue)
      this.handleZeros = false;
    }

    this.oldValue = val;

    return this.handleZeros;
  }
}
