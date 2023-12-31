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

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CardPricingComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render div elements', () => {
    const fixture = TestBed.createComponent(CardPricingComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.card-pricing_container')).toBeTruthy();
    expect(compiled.querySelector('.card-pricing_title')).toBeTruthy();
    expect(compiled.querySelector('.card-pricing_value')).toBeTruthy();
    expect(compiled.querySelector('.card-pricing_value_console')).toBeTruthy();
    expect(compiled.querySelector('.card-pricing_value_money')).toBeTruthy();
  });

  it('should render h3 element', () => {
    const fixture = TestBed.createComponent(CardPricingComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')).toBeTruthy();
  });

  it('should render span element', () => {
    const fixture = TestBed.createComponent(CardPricingComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('span')).toBeTruthy();
  });

  it('should render p element', () => {
    const fixture = TestBed.createComponent(CardPricingComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')).toBeTruthy();
  });

  it(`should have gameType and gamePrice properties`, () => {
    const fixture = TestBed.createComponent(CardPricingComponent);
    const app = fixture.componentInstance;
    expect(app.gameType).toBeDefined();
    expect(app.gamePrice).toBeDefined();
  });

  it('should render "" in gameType and "" gamePrice', () => {
    const fixture = TestBed.createComponent(CardPricingComponent);
    const app = fixture.componentInstance;
    app.gameType = 'DIGITAL | PS3';
    app.gamePrice = 'R$ 129,99';
    
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.card-pricing_value_console p')?.textContent).toContain('DIGITAL | PS3');
    expect(compiled.querySelector('.card-pricing_value_money p')?.textContent).toContain('R$ 129,99');
  });
});
