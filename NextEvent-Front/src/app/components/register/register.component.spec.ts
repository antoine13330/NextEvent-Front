import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterGamingComponent } from './register.component';

describe('RegisterGamingComponent', () => {
  let component: RegisterGamingComponent;
  let fixture: ComponentFixture<RegisterGamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterGamingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterGamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
