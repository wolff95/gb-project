import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GbRoundCheckboxComponent } from './gb-round-checkbox.component';

describe('GbRoundCheckboxComponent', () => {
  let component: GbRoundCheckboxComponent;
  let fixture: ComponentFixture<GbRoundCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GbRoundCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GbRoundCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
