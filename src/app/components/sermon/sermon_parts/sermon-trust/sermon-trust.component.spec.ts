import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SermonTrustComponent } from './sermon-trust.component';

describe('SermonTrustComponent', () => {
  let component: SermonTrustComponent;
  let fixture: ComponentFixture<SermonTrustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SermonTrustComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SermonTrustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
