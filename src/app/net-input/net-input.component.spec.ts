import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetInputComponent } from './net-input.component';

describe('NetInputComponent', () => {
  let component: NetInputComponent;
  let fixture: ComponentFixture<NetInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
