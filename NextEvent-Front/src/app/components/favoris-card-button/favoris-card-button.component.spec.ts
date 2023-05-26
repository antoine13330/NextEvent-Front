import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorisCardButtonComponent } from './favoris-card-button.component';

describe('FavorisCardButtonComponent', () => {
  let component: FavorisCardButtonComponent;
  let fixture: ComponentFixture<FavorisCardButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavorisCardButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavorisCardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
