import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberTypesAddComponent } from './member-types-add.component';

describe('MemberTypesAddComponent', () => {
  let component: MemberTypesAddComponent;
  let fixture: ComponentFixture<MemberTypesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberTypesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberTypesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
