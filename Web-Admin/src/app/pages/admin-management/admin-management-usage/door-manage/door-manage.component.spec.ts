import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorManageComponent } from './door-manage.component';

describe('DoorManageComponent', () => {
  let component: DoorManageComponent;
  let fixture: ComponentFixture<DoorManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoorManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoorManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
