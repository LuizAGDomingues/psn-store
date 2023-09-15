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

  const fixture = TestBed.createComponent(CardLabelComponent);
  fixture.detectChanges();
  const compiled = fixture.debugElement.nativeElement;
  
  it('should create the div elements and the p element', () => {
    const divContainerElement = compiled.querySelector('.card-label_container');
    expect(divContainerElement).toBeTruthy();

    const divContentElement = divContainerElement.querySelector('.card-label_content');
    expect(divContentElement).toBeTruthy();

    const imgElement = divContentElement.querySelector('p');
    expect(imgElement).toBeTruthy();
  });

});
