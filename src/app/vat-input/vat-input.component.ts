import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {} from "@angular/core";
import { VatRateService } from "../services/vat-rate.service";

@Component({
  selector: "gb-vat-input",
  templateUrl: "./vat-input.component.html",
  styleUrls: ["./vat-input.component.scss"]
})
export class VatInputComponent implements OnInit {
  @Input() vatValue: number;
  @Output() calculateByVat = new EventEmitter<number>();

  constructor(private vatRateService: VatRateService) {}

  ngOnInit() {}

  onValChange(val: number) {
    this.calculateByVat.emit(val);
  }
}
