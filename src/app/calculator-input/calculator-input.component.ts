import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { VatRateService } from "../services/vat-rate.service";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: "calculator-input",
  templateUrl: "./calculator-input.component.html",
  styleUrls: ["./calculator-input.component.scss"]
})
export class CalculatorInputComponent implements OnInit {
  @Input() value: number;
  @Input() param: string;
  @Output() event = new EventEmitter<string>();

  inputFormControl = new FormControl("", [Validators.min(1)]);

  constructor(private vatRateService: VatRateService) {}

  ngOnInit() {}

  onValChange(value: number) {
    this.vatRateService.setValueBy(this.param, value);
    this.event.emit(this.param);
  }
}
