import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBenefitsComponent } from './about-benefits.component';

describe('AboutBenefitsComponent', () => {
  let component: AboutBenefitsComponent;
  let fixture: ComponentFixture<AboutBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutBenefitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
