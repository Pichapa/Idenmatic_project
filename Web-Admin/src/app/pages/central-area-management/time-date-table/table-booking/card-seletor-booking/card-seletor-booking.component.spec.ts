import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSeletorBookingComponent } from './card-seletor-booking.component';

describe('CardSeletorBookingComponent', () => {
  let component: CardSeletorBookingComponent;
  let fixture: ComponentFixture<CardSeletorBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSeletorBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSeletorBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
