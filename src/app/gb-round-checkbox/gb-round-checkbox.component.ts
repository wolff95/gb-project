import { Component, OnInit } from '@angular/core';
import { VatRateService } from "../_services/vat-rate.service";

@Component({
  selector: 'gb-round-checkbox',
  templateUrl: './gb-round-checkbox.component.html',
  styleUrls: ['./gb-round-checkbox.component.scss']
})
export class GbRoundCheckboxComponent{
  round:boolean;

  constructor(private vatRateService: VatRateService) { 
    this.round = vatRateService.round;
  }

  onToggle(val: boolean){
    this.vatRateService.roundChangeValue(val);
  }
}
