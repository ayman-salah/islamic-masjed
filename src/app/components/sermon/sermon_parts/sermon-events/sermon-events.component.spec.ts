import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SermonEventsComponent } from './sermon-events.component';

describe('SermonEventsComponent', () => {
  let component: SermonEventsComponent;
  let fixture: ComponentFixture<SermonEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SermonEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SermonEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
