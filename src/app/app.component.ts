import { Component } from "@angular/core";
import { VatRateService } from "./services/vat-rate.service";
import { CalculatorObj } from "./models/calculator-value-obj.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  calculatorValueObj: CalculatorObj = new CalculatorObj();
  grossVal: number;
  netVal: number;
  vatVal: number;
  errorMessage: string;

  constructor(private vatRateService: VatRateService) {}

  recalculate() {
    //this.calculateByGross(this.calculatorValueObj.grossValue);
  }

  recalculateBy(param: string) {
    this.calculatorValueObj = this.vatRateService.calculateBy(param);
    if (this.calculatorValueObj) {
      this.netVal = this.calculatorValueObj.netValue;
      this.grossVal = this.calculatorValueObj.grossValue;
      this.vatVal = this.calculatorValueObj.vatValue;
    } else {
      this.errorMessage = this.vatRateService.errorMessage;
    }
  }
}
