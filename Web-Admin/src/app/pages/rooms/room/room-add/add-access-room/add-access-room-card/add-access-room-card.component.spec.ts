import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccessRoomCardComponent } from './add-access-room-card.component';

describe('AddAccessRoomCardComponent', () => {
  let component: AddAccessRoomCardComponent;
  let fixture: ComponentFixture<AddAccessRoomCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAccessRoomCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccessRoomCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
