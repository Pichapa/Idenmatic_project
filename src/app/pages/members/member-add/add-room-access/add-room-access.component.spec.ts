import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoomAccessComponent } from './add-room-access.component';

describe('AddRoomAccessComponent', () => {
  let component: AddRoomAccessComponent;
  let fixture: ComponentFixture<AddRoomAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRoomAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRoomAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
