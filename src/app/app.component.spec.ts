import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { CardLabelComponent } from 'src/app/components/game-card/card-label/card-label.component';
import { CardPricingComponent } from 'src/app/components/game-card/card-pricing/card-pricing.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent, HomeComponent, MenuBarComponent, GameCardComponent, CardLabelComponent, CardPricingComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

   it('should create the Menu Bar Component', () => {
    const fixture = TestBed.createComponent(MenuBarComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create the Home Component', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
