import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomAddCardComponent } from './room-add-card.component';

describe('RoomAddCardComponent', () => {
  let component: RoomAddCardComponent;
  let fixture: ComponentFixture<RoomAddCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomAddCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomAddCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
