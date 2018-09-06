import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GbHeaderComponent } from './gb-header.component';

describe('GbHeaderComponent', () => {
  let component: GbHeaderComponent;
  let fixture: ComponentFixture<GbHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GbHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GbHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
