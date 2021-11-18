import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomEditAccessComponent } from './room-edit-access.component';

describe('RoomEditAccessComponent', () => {
  let component: RoomEditAccessComponent;
  let fixture: ComponentFixture<RoomEditAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomEditAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomEditAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
