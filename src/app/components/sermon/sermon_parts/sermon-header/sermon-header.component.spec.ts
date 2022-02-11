import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SermonHeaderComponent } from './sermon-header.component';

describe('SermonHeaderComponent', () => {
  let component: SermonHeaderComponent;
  let fixture: ComponentFixture<SermonHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SermonHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SermonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
