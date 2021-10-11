import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAditCardCarComponent } from './member-adit-card-car.component';

describe('MemberAditCardCarComponent', () => {
  let component: MemberAditCardCarComponent;
  let fixture: ComponentFixture<MemberAditCardCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberAditCardCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberAditCardCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
