import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomLayoutCardComponent } from './room-layout-card.component';

describe('RoomLayoutCardComponent', () => {
  let component: RoomLayoutCardComponent;
  let fixture: ComponentFixture<RoomLayoutCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomLayoutCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomLayoutCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
