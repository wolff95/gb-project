import { Component, OnInit } from '@angular/core';
import { VatRateService } from "../_services/vat-rate.service";

@Component({
  selector: 'gb-round-checkbox',
  templateUrl: './gb-round-checkbox.component.html',
  styleUrls: ['./gb-round-checkbox.component.scss']
})
export class GbRoundCheckboxComponent{
  round:boolean;
  
  /**
   * set the value default from the service
   */
  constructor(private vatRateService: VatRateService) { 
    this.round = vatRateService.round;
  }

/**
 * clicking the round checkbox comunicate the change
 * @param  {boolean} val
 */
  onToggle(val: boolean){
    this.vatRateService.roundChangeValue(val);
  }
}
