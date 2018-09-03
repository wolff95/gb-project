import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VatButtonsComponent } from './vat-buttons.component';

describe('VatButtonsComponent', () => {
  let component: VatButtonsComponent;
  let fixture: ComponentFixture<VatButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VatButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VatButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
