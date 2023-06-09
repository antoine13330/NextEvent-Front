import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPage } from './details.component';

describe('DetailsPage', () => {
  let component: DetailsPage;
  let fixture: ComponentFixture<DetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
