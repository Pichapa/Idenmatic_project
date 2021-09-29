import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomListCardSelectComponent } from './room-list-card-select.component';

describe('RoomListCardSelectComponent', () => {
  let component: RoomListCardSelectComponent;
  let fixture: ComponentFixture<RoomListCardSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomListCardSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomListCardSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
