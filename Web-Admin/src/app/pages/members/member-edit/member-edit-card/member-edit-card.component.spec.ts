import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberEditCardComponent } from './member-edit-card.component';

describe('MemberEditCardComponent', () => {
  let component: MemberEditCardComponent;
  let fixture: ComponentFixture<MemberEditCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberEditCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberEditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
