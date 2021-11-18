import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRoomtypeCardComponent } from './edit-roomtype-card.component';

describe('EditRoomtypeCardComponent', () => {
  let component: EditRoomtypeCardComponent;
  let fixture: ComponentFixture<EditRoomtypeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRoomtypeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRoomtypeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
