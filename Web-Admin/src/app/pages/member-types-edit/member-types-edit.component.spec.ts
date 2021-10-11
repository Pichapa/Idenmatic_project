import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberTypesEditComponent } from './member-types-edit.component';

describe('MemberTypesEditComponent', () => {
  let component: MemberTypesEditComponent;
  let fixture: ComponentFixture<MemberTypesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberTypesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberTypesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
