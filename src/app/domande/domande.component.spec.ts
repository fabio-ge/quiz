import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomandeComponent } from './domande.component';

describe('DomandeComponent', () => {
  let component: DomandeComponent;
  let fixture: ComponentFixture<DomandeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DomandeComponent]
    });
    fixture = TestBed.createComponent(DomandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
