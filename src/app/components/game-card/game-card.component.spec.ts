import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GameCardComponent } from './game-card.component';
import { CardLabelComponent } from './card-label/card-label.component';
import { CardPricingComponent } from './card-pricing/card-pricing.component';

describe('GameCardComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [GameCardComponent, CardLabelComponent, CardPricingComponent]
    });
  });

  const fixture = TestBed.createComponent(GameCardComponent);
  fixture.detectChanges();
  const compiled = fixture.debugElement.nativeElement;
  const aElement = compiled.querySelector('.card_container');

  it('should create the a element', () => {
    expect(aElement).toBeTruthy();
  });

  it('should create the img element', () => {
    const imgElement = aElement.querySelector('.card_img');
    expect(imgElement).toBeTruthy();
  });

  it('should create the CardLabel component', () => {
    const cardLabelElement = aElement.querySelector('app-card-label');
    expect(cardLabelElement).toBeTruthy();
  });

  it('should create the img element', () => {
    const cardPricingElement = aElement.querySelector('app-card-pricing');
    expect(cardPricingElement).toBeTruthy();
  });
});
