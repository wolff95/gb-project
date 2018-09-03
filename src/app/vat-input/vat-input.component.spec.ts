import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VatInputComponent } from './vat-input.component';

describe('VatInputComponent', () => {
  let component: VatInputComponent;
  let fixture: ComponentFixture<VatInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VatInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VatInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
