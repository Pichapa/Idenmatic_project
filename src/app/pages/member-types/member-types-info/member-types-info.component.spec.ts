import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberTypesInfoComponent } from './member-types-info.component';

describe('MemberTypesInfoComponent', () => {
  let component: MemberTypesInfoComponent;
  let fixture: ComponentFixture<MemberTypesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberTypesInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberTypesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
