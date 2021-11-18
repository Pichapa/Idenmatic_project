import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoomtypeCardComponent } from './add-roomtype-card.component';

describe('AddRoomtypeCardComponent', () => {
  let component: AddRoomtypeCardComponent;
  let fixture: ComponentFixture<AddRoomtypeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRoomtypeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRoomtypeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
