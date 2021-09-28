import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberEditCarComponent } from './member-edit-car.component';

describe('MemberEditCarComponent', () => {
  let component: MemberEditCarComponent;
  let fixture: ComponentFixture<MemberEditCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberEditCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberEditCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
