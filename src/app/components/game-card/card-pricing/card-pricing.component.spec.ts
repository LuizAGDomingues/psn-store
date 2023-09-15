import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CardPricingComponent } from './card-pricing.component';

describe('GameCardComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CardPricingComponent]
    });
  });

  const fixture = TestBed.createComponent(CardPricingComponent);
  fixture.detectChanges();
  const compiled = fixture.debugElement.nativeElement;
  const divContainerElement = compiled.querySelector('.card-pricing_container');
  const divValueElement = divContainerElement.querySelector('.card-pricing_value');

  it('should create the div container element', () => {
    expect(divContainerElement).toBeTruthy();
  });

  it('should create the div title and h3 element', () => {
    const divTitleElement = divContainerElement.querySelector('.card-pricing_title');
    expect(divTitleElement).toBeTruthy();

    const h3Element = divTitleElement.querySelector('h3');
    expect(h3Element).toBeTruthy();
  });

  it('should create the div value element', () => {
    expect(divValueElement).toBeTruthy();
  });

  it('should create the div console, span and p element', () => {
    const divConsoleElement = divValueElement.querySelector('.card-pricing_value_console');
    expect(divConsoleElement).toBeTruthy();

    const spanElement = divConsoleElement.querySelector('span');
    expect(spanElement).toBeTruthy();

    const pElement = divConsoleElement.querySelector('p');
    expect(pElement).toBeTruthy();
  });

  it('should create the div money and p element', () => {
    const divMoneyElement = divValueElement.querySelector('.card-pricing_value_money');
    expect(divMoneyElement).toBeTruthy();

    const pElement = divMoneyElement.querySelector('p');
    expect(pElement).toBeTruthy();
  });

});
