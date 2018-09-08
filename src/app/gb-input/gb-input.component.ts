import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { RoundNumberPipe } from '../_pipes/customNumber.pipe';
import { DecimalPipe } from "@angular/common";

import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  ValidatorFn,
  AbstractControl
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { VatRateService } from "../_services/vat-rate.service";

@Component({
  selector: "gb-input",
  templateUrl: "./gb-input.component.html",
  styleUrls: ["./gb-input.component.scss"]
})
export class GbInputComponent{
  @Input() inputObj: any;

  //const: formatting rules;
  minValue:number = 0.009;
  formControl = new FormControl('', [Validators.required, Validators.min(this.minValue)]);

  constructor(private vatRateService: VatRateService, private roundNumberPipe: RoundNumberPipe) {
    vatRateService.isChangedStream.subscribe(() => {
      vatRateService.vatRate ? this.formControl.enable() : this.formControl.disable()
      if(this.inputObj) {
        let value = vatRateService.round ? roundNumberPipe.transform(this.vatRateService[this.inputObj.constName], 2) : this.vatRateService[this.inputObj.constName];
        this.formControl.patchValue(value);
      }
    })
  }

  onValChange(val: number) {
    if(val || val === 0)
      this.vatRateService.changeValue(val, this.inputObj.constName);
  }
}
