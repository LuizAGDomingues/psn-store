import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { GameCardComponent } from 'src/app/components/game-card/game-card.component';
import { CardLabelComponent } from 'src/app/components/game-card/card-label/card-label.component';
import { CardPricingComponent } from 'src/app/components/game-card/card-pricing/card-pricing.component';

describe('HomeComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HomeComponent, GameCardComponent, CardLabelComponent, CardPricingComponent]
    });
  });

  it('should create the HomeComponent', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render div element', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div')).toBeTruthy();
  });

  it('should render GameCardComponent', () => {
    const fixture = TestBed.createComponent(GameCardComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});