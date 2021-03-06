import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadComponent } from './lead.component';

describe('HotelComponent', () => {
  let component: LeadComponent;
  let fixture: ComponentFixture<LeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
