import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomEditCardComponent } from './room-edit-card.component';

describe('RoomEditCardComponent', () => {
  let component: RoomEditCardComponent;
  let fixture: ComponentFixture<RoomEditCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomEditCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomEditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
