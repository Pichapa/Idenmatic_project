import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomAddInfoComponent } from './room-add-info.component';

describe('RoomAddInfoComponent', () => {
  let component: RoomAddInfoComponent;
  let fixture: ComponentFixture<RoomAddInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomAddInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomAddInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
