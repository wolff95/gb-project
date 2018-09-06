import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrossInputComponent } from './gross-input.component';

describe('GrossInputComponent', () => {
  let component: GrossInputComponent;
  let fixture: ComponentFixture<GrossInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrossInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrossInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
