import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomEditOwnerComponent } from './room-edit-owner.component';

describe('RoomEditOwnerComponent', () => {
  let component: RoomEditOwnerComponent;
  let fixture: ComponentFixture<RoomEditOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomEditOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomEditOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
