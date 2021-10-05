import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomAddInfoCardRightComponent } from './room-add-info-card-right.component';

describe('RoomAddInfoCardRightComponent', () => {
  let component: RoomAddInfoCardRightComponent;
  let fixture: ComponentFixture<RoomAddInfoCardRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomAddInfoCardRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomAddInfoCardRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
