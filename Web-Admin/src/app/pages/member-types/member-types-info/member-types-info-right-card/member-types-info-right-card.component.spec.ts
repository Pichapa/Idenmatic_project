import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberTypesInfoRightCardComponent } from './member-types-info-right-card.component';

describe('MemberTypesInfoRightCardComponent', () => {
  let component: MemberTypesInfoRightCardComponent;
  let fixture: ComponentFixture<MemberTypesInfoRightCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberTypesInfoRightCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberTypesInfoRightCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
