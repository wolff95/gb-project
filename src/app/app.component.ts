import { Component } from "@angular/core";
import { VatRateService } from "./_services/vat-rate.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  inputs: Array<any>;

  /**
   * @param constName used to identify the input
   * @param label used to display the name of the input
   * @param inputs object loop for display 3 input
   */
  constructor(private vatRateService: VatRateService) {
    this.inputs = [
      {
        constName: 'grossValue',
        label: 'Gross',
      },
      {
        constName: 'vatValue',
        label: 'VAT',
      },
      {
        constName: 'netValue',
        label: 'Net',
      }
    ]
  }
}
