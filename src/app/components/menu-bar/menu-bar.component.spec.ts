import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarComponent } from './menu-bar.component';

describe('MenuBarComponent', () => {
  let component: MenuBarComponent;
  let fixture: ComponentFixture<MenuBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuBarComponent]
    });
    fixture = TestBed.createComponent(MenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain an image', () => {
    const imgElement = fixture.nativeElement.querySelector('img');
    expect(imgElement).toBeTruthy();
  });

  it('should contain a list element', () => {
    const ulElement = fixture.nativeElement.querySelector('ul');
    expect(ulElement).toBeTruthy();
  });
});
