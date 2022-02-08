import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMembersComponent } from './about-members.component';

describe('AboutMembersComponent', () => {
  let component: AboutMembersComponent;
  let fixture: ComponentFixture<AboutMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
