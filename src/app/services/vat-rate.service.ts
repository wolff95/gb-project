import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { CalculatorObj } from "../models/calculator-value-obj.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class VatRateService {
  selectedVatRate: number;
  vatRates: number[] = [10, 13, 20];
  calculatorValueObj: CalculatorObj = new CalculatorObj();
  errorMessage: string;

  constructor(public http: Http) {}
  url: string = "http://localhost:3000";

  getVatRates() {
    return this.http.get(this.url + "/vatRates").pipe(map(res => res.json()));
  }

  setValueBy(param: string, value: number) {
    this.calculatorValueObj[param + "Value"] = value;
  }

  calculateBy(param: string): CalculatorObj {
    this.errorMessage = "";
    switch (param) {
      case "gross":
        this.calculatorValueObj.vatValue =
          this.calculatorValueObj.grossValue / 100 * this.selectedVatRate;
        this.calculatorValueObj.netValue =
          this.calculatorValueObj.grossValue - this.calculatorValueObj.vatValue;
        return this.calculatorValueObj;
      case "vat":
        this.calculatorValueObj.grossValue =
          this.calculatorValueObj.vatValue / this.selectedVatRate * 100;
        this.calculatorValueObj.netValue =
          this.calculatorValueObj.grossValue - this.calculatorValueObj.vatValue;
        return this.calculatorValueObj;
      case "net":
        this.calculatorValueObj.vatValue =
          this.calculatorValueObj.netValue /
          (100 - this.selectedVatRate) *
          this.selectedVatRate;
        this.calculatorValueObj.grossValue =
          this.calculatorValueObj.netValue + this.calculatorValueObj.vatValue;
        return this.calculatorValueObj;
      default:
        if (this.calculatorValueObj.grossValue) {
          this.calculateBy("gross");
        } else if (this.calculatorValueObj.vatValue) {
          this.calculateBy("vat");
        } else if (this.calculatorValueObj.netValue) {
          this.calculateBy("net");
        } else {
          this.errorMessage = "One value at least is needed";
        }
    }
  }
}
