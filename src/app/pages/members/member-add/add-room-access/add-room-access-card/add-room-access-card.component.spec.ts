import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoomAccessCardComponent } from './add-room-access-card.component';

describe('AddRoomAccessCardComponent', () => {
  let component: AddRoomAccessCardComponent;
  let fixture: ComponentFixture<AddRoomAccessCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRoomAccessCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRoomAccessCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
