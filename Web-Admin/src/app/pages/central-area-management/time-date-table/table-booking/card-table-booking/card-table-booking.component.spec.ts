import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTableBookingComponent } from './card-table-booking.component';

describe('CardTableBookingComponent', () => {
  let component: CardTableBookingComponent;
  let fixture: ComponentFixture<CardTableBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTableBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTableBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
