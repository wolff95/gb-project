import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IVatRates } from './vat-rate.interface';

@Injectable()
export class VatRateService {
  private ENDPOINT = environment.end_point + '/api/vatRates';

  private isChanged = new BehaviorSubject<boolean>(false);
  isChangedStream = this.isChanged.asObservable();

  vatRate: number;
  grossValue: number;
  vatValue: number;
  netValue: number;

  round: boolean = false;

  lastChangedValue: string;

  constructor(private http: HttpClient ){

  }

  getVatRates(): Observable<IVatRates> {
    return this.http.get<IVatRates>(this.ENDPOINT + '/getVatRates');
  }

  //gb-input and vat-buttons change trigger
  changeValue(dataVal: number, constName: string) {
    if (constName) {
      this[constName] = dataVal;
      if(constName !== 'vatRate') {
        this.lastChangedValue = constName;
      }
      this.calculate(constName);
    }
  }

  //calculate by where user types
  calculate(constName) {
    switch (constName) {
      case 'grossValue':
        this.isGrossValueDefined()
        break;
      case 'vatValue':
        this.isVatValueDefined()
        break;
      case 'netValue':
        this.isNetValueDefined()
        break;
      default:
        this.vatRateChanged()
        break;
    }
    this.isChanged.next(!this.isChanged.getValue());
  }

  isGrossValueDefined() { 
    this.vatValue = this.grossValue / 100 * this.vatRate;
    this.netValue = this.grossValue - this.vatValue;
  }

  isVatValueDefined() {
    this.grossValue = this.vatValue / this.vatRate * 100;
    this.netValue = this.grossValue - this.vatValue;
  }

  isNetValueDefined() {
    this.vatValue = this.netValue / (100 - this.vatRate) * this.vatRate;
    this.grossValue = this.netValue + this.vatValue;
  }

  vatRateChanged() {
    if(this.lastChangedValue) {
      this.calculate(this.lastChangedValue)
    }
  }

  //gb-round-checkbox change trigger
  roundChangeValue(roundVal: boolean){
    this.round = roundVal;
    this.lastChangedValue = '';
    this.calculate(this.lastChangedValue);
  }
}