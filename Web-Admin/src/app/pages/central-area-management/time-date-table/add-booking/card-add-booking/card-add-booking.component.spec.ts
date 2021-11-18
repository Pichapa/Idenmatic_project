import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAddBookingComponent } from './card-add-booking.component';

describe('CardAddBookingComponent', () => {
  let component: CardAddBookingComponent;
  let fixture: ComponentFixture<CardAddBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAddBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAddBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
