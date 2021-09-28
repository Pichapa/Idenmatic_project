import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAddCarComponent } from './member-add-car.component';

describe('MemberAddCarComponent', () => {
  let component: MemberAddCarComponent;
  let fixture: ComponentFixture<MemberAddCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberAddCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberAddCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
