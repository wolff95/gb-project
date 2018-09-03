import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { VatRateService } from "../services/vat-rate.service";

@Component({
  selector: "gb-net-input",
  templateUrl: "./net-input.component.html",
  styleUrls: ["./net-input.component.scss"]
})
export class NetInputComponent implements OnInit {
  @Input() netValue: number;
  @Output() calculateByNet = new EventEmitter<number>();

  constructor(private vatRateService: VatRateService) {}

  ngOnInit() {}

  onValChange(val: number) {
    this.calculateByNet.emit(val);
  }
}
