import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBundleComponent } from './card-bundle.component';

describe('CardBundleComponent', () => {
  let component: CardBundleComponent;
  let fixture: ComponentFixture<CardBundleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardBundleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
