import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScegliArgomentoComponent } from './scegli-argomento.component';

describe('ScegliArgomentoComponent', () => {
  let component: ScegliArgomentoComponent;
  let fixture: ComponentFixture<ScegliArgomentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScegliArgomentoComponent]
    });
    fixture = TestBed.createComponent(ScegliArgomentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
