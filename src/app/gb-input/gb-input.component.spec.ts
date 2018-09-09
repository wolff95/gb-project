import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GbInputComponent } from './gb-input.component';

describe('GrossInputComponent', () => {
  let component: GbInputComponent;
  let fixture: ComponentFixture<GbInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GbInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GbInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
