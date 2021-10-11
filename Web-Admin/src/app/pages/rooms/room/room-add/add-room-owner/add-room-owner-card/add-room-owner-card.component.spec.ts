import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoomOwnerCardComponent } from './add-room-owner-card.component';

describe('AddRoomOwnerCardComponent', () => {
  let component: AddRoomOwnerCardComponent;
  let fixture: ComponentFixture<AddRoomOwnerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRoomOwnerCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRoomOwnerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
