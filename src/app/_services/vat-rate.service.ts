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

  round: boolean = true;

  lastChangedValue: string;

  constructor(private http: HttpClient ){

  }
  
  /**
   * @returns Observable<IVatRates> -> vat-buttons
   */
  getVatRates(): Observable<IVatRates> {
    return this.http.get<IVatRates>(this.ENDPOINT + '/getVatRates');
  }

  /**
   * gb-input and vat-buttons change trigger
   * @param  {number} val
   * @param  {string} constName
   */
  changeValue(val: number, constName: string) {
    if (constName) {
      this[constName] = val;
      if(constName !== 'vatRate') {
        this.lastChangedValue = constName;
      }
      this.calculate(constName);
    }
  }

  /**
   * Depends on the constName we use different cases
   * @param  {} constName name of the data modified
   */
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

  /**
   * calculate @param vatValue and @param netValue
   * with @param grossValue and @param vatRate
   */
  isGrossValueDefined() {
    this.vatValue = this.grossValue / 100 * this.vatRate;
    this.netValue = this.grossValue - this.vatValue;
  }

  /**
   * calculate @param grossValue and @param netValue
   * with @param vatValue and @param vatRate
   */
  isVatValueDefined() {
    this.grossValue = this.vatValue / this.vatRate * 100;
    this.netValue = this.grossValue - this.vatValue;
  }

  /**
   * calculate @param vatValue and @param grossValue
   * with @param netValue and @param vatRate
   */
  isNetValueDefined() {
    this.vatValue = this.netValue / (100 - this.vatRate) * this.vatRate;
    this.grossValue = this.netValue + this.vatValue;
  }

  /**
   * vat-buttons change trigger, calculate by @param lastChangeValue if evaluated
   * calculate@param netvalue and @param vatValue
   */
  vatRateChanged() {
    if(this.lastChangedValue) {
      this.calculate(this.lastChangedValue)
    }
  }
  
  /**
   * toggle round mode and calculate by the @param lastChangedValue
   * @param  {boolean} roundVal
   */
  roundChangeValue(roundVal: boolean){
    this.round = roundVal;
    this.calculate(this.lastChangedValue);
  }
  
}