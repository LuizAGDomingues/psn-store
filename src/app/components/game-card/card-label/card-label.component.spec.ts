import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CardLabelComponent } from './card-label.component';

describe('GameCardComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CardLabelComponent]
    });
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CardLabelComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render div elements', () => {
    const fixture = TestBed.createComponent(CardLabelComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.card-label_container')).toBeTruthy();
    expect(compiled.querySelector('.card-label_content')).toBeTruthy();
  });

  it('should render p element', () => {
    const fixture = TestBed.createComponent(CardLabelComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')).toBeTruthy();
  });

  it(`should have gameLabel property`, () => {
    const fixture = TestBed.createComponent(CardLabelComponent);
    const app = fixture.componentInstance;
    expect(app.gameLabel).toBeDefined();
  });

  it('should render gameLabel as "DIGITAL"', () => {
    const fixture = TestBed.createComponent(CardLabelComponent);
    const app = fixture.componentInstance;
    app.gameLabel = 'DIGITAL';
    
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.card-label_content p')?.textContent).toContain('DIGITAL');
  });
});
