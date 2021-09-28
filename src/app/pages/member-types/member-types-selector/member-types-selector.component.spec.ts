import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberTypesSelectorComponent } from './member-types-selector.component';

describe('MemberTypesSelectorComponent', () => {
  let component: MemberTypesSelectorComponent;
  let fixture: ComponentFixture<MemberTypesSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberTypesSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberTypesSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
