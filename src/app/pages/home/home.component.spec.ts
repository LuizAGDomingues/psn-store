import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { GameCardComponent } from 'src/app/components/game-card/game-card.component';

describe('HomeComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HomeComponent, GameCardComponent]
    });
  });

  it('should create the div and GameCardComponent', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const divElement = compiled.querySelector('.home_container');

    expect(divElement).toBeTruthy();

    const gameCardComponent = divElement.querySelector('app-game-card');

    expect(gameCardComponent).toBeTruthy();
  });
});