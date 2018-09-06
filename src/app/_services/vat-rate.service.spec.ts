import { TestBed, inject } from '@angular/core/testing';

import { VatRateService } from './vat-rate.service';

describe('VatRateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VatRateService]
    });
  });

  it('should be created', inject([VatRateService], (service: VatRateService) => {
    expect(service).toBeTruthy();
  }));
});
