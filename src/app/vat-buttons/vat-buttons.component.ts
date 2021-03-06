import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { VatRateService } from "../_services/vat-rate.service";

@Component({
  selector: "gb-vat-buttons",
  templateUrl: "./vat-buttons.component.html",
  styleUrls: ["./vat-buttons.component.scss"]
})
export class VatButtonsComponent implements OnInit {
  constructor(private vatRateService: VatRateService) {

  }

  @Output() recalculate = new EventEmitter<number>();

  vatRates: Number[];
  isVatRateSelected: boolean = false;

  /**
  * get the array of vatRate% from service
  */
  ngOnInit(){
    this.vatRateService.getVatRates()
    .subscribe(data => this.vatRates = data.values);
  }

  /**
   * on click comunicate the change and pass the value
   * @param  {number} val
   */
  onValChange(val: number) {
    this.isVatRateSelected = true;
    this.vatRateService.changeValue(val, 'vatRate');
  }
}
