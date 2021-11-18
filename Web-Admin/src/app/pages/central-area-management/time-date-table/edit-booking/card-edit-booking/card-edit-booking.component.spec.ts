import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEditBookingComponent } from './card-edit-booking.component';

describe('CardEditBookingComponent', () => {
  let component: CardEditBookingComponent;
  let fixture: ComponentFixture<CardEditBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEditBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEditBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
