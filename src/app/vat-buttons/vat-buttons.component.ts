import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { VatRateService } from "../services/vat-rate.service";

@Component({
  selector: "gb-vat-buttons",
  templateUrl: "./vat-buttons.component.html",
  styleUrls: ["./vat-buttons.component.scss"]
})
export class VatButtonsComponent implements OnInit {
  constructor(private vatRateService: VatRateService) {}

  @Output() recalculate = new EventEmitter<number>();

  vatRates: number[];

  ngOnInit() {
    this.vatRateService.getVatRates().subscribe(vatRates => {
      this.vatRates = vatRates;
    });
  }

  onValChange(val: number) {
    this.vatRateService.selectedVatRate = val;
    this.recalculate.emit();
  }
}
