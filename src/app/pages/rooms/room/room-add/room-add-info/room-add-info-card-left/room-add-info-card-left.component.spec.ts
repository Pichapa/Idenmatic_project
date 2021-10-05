import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomAddInfoCardLeftComponent } from './room-add-info-card-left.component';

describe('RoomAddInfoCardLeftComponent', () => {
  let component: RoomAddInfoCardLeftComponent;
  let fixture: ComponentFixture<RoomAddInfoCardLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomAddInfoCardLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomAddInfoCardLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
