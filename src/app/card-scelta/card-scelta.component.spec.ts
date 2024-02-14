import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSceltaComponent } from './card-scelta.component';

describe('CardSceltaComponent', () => {
  let component: CardSceltaComponent;
  let fixture: ComponentFixture<CardSceltaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardSceltaComponent]
    });
    fixture = TestBed.createComponent(CardSceltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
