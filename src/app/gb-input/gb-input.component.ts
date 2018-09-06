import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { CustomNumberPipe } from '../_pipes/customNumber.pipe';

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

  constructor(private vatRateService: VatRateService) {
    vatRateService.isChangedStream.subscribe(() => {
      if(this.inputObj) {
        console.log(this.inputObj)
        let value = this.vatRateService[this.inputObj.constName];
        this.formControl.patchValue(value);
      }
    })
  }

  onValChange(val: number) {
    this.vatRateService.changeValue(val, this.inputObj.constName);
  }

}
