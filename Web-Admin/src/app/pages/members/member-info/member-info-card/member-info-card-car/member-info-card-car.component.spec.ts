import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberInfoCardCarComponent } from './member-info-card-car.component';

describe('MemberInfoCardCarComponent', () => {
  let component: MemberInfoCardCarComponent;
  let fixture: ComponentFixture<MemberInfoCardCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberInfoCardCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberInfoCardCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
