import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccessRoomComponent } from './add-access-room.component';

describe('AddAccessRoomComponent', () => {
  let component: AddAccessRoomComponent;
  let fixture: ComponentFixture<AddAccessRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAccessRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccessRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
