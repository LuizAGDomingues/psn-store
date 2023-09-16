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

  it('sgound create the app', () => {
    const fixture = TestBed.createComponent(GameCardComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render p element', () => {
    const fixture = TestBed.createComponent(GameCardComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a')).toBeTruthy();
  });

  it('should render p element', () => {
    const fixture = TestBed.createComponent(GameCardComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('img')).toBeTruthy();
  });

  it('should render GameCardComponent', () => {
    const fixture = TestBed.createComponent(CardLabelComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render GameCardComponent', () => {
    const fixture = TestBed.createComponent(CardPricingComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
