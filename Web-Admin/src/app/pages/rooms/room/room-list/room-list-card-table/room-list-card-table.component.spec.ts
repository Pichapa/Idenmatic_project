import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomListCardTableComponent } from './room-list-card-table.component';

describe('RoomListCardTableComponent', () => {
  let component: RoomListCardTableComponent;
  let fixture: ComponentFixture<RoomListCardTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomListCardTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomListCardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
