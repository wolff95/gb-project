import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {FormControl, FormGroupDirective, NgForm, Validators, ValidatorFn, AbstractControl } from "@angular/forms";
import { VatRateService } from "../_services/vat-rate.service";
import { RoundNumberPipe } from '../_pipes/round-number.pipe';
import { isValidNumber } from "../_validators/is-number.validator"
import { environment } from "../../environments/environment";

@Component({
  selector: "gb-input",
  templateUrl: "./gb-input.component.html",
  styleUrls: ["./gb-input.component.scss"]
})
export class GbInputComponent{
  @Input() inputObj: any;

  formControl = new FormControl('', [Validators.required, Validators.min(environment.constants.minValueValidator), isValidNumber()]);
  
  /**
   * @description retrieve the value from the service on every change.
   * enable formControl if vatRate evaluated. Manipulate to display the data correctly or formatted if round true
   */
  constructor(private vatRateService: VatRateService, private roundNumberPipe: RoundNumberPipe) {
    vatRateService.isChangedStream.subscribe(() => {
      vatRateService.vatRate ? this.formControl.enable() : this.formControl.disable()
      
      if(this.inputObj && typeof this.vatRateService[this.inputObj.constName] !== undefined && this.inputObj.constName !== this.vatRateService.lastChangedValue) {
        let value = vatRateService.round ? 
        roundNumberPipe.transform(this.vatRateService[this.inputObj.constName], environment.constants.minDecimalLength) : 
        this.vatRateService[this.inputObj.constName];
        
        if(isNaN(value)){
          value = '';
        }
        this.formControl.patchValue(value);
      }
    })
  }
  
  /**
   * on change on input, parse it and comunicate the change
   * @param  {string} val
   */
  onValChange(val: string) {
    let value = parseFloat(val.replace(',', '.'));

    this.vatRateService.changeValue(value, this.inputObj.constName);
  }
  
  /**
   * on blur round the value just inserted by the user
   * @param  {string} val
   */
  roundValue(val: string){
    if(this.vatRateService.round){
      this.formControl.patchValue(this.roundNumberPipe.transform(val, environment.constants.minDecimalLength));
    }
  }
  
}
