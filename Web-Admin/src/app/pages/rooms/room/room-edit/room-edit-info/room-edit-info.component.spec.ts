import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomEditInfoComponent } from './room-edit-info.component';

describe('RoomEditInfoComponent', () => {
  let component: RoomEditInfoComponent;
  let fixture: ComponentFixture<RoomEditInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomEditInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomEditInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
