import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingManageComponent } from './parking-manage.component';

describe('ParkingManageComponent', () => {
  let component: ParkingManageComponent;
  let fixture: ComponentFixture<ParkingManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
