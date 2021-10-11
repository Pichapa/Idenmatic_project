import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberTypesInfoLeftCardComponent } from './member-types-info-left-card.component';

describe('MemberTypesInfoLeftCardComponent', () => {
  let component: MemberTypesInfoLeftCardComponent;
  let fixture: ComponentFixture<MemberTypesInfoLeftCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberTypesInfoLeftCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberTypesInfoLeftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
