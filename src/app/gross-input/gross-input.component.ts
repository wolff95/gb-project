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
  selector: "gb-gross-input",
  templateUrl: "./gross-input.component.html",
  styleUrls: ["./gross-input.component.scss"]
})
export class GrossInputComponent implements OnInit {
  @Input() grossValue: number;
  @Output() calculateByGross = new EventEmitter<number>();

  grossFormControl = new FormControl("", [Validators.min(1)]);

  constructor(private vatRateService: VatRateService) {}

  ngOnInit() {}

  onValChange(val: number) {
    this.calculateByGross.emit(val);
  }
}
