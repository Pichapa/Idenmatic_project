import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberEditCardDocComponent } from './member-edit-card-doc.component';

describe('MemberEditCardDocComponent', () => {
  let component: MemberEditCardDocComponent;
  let fixture: ComponentFixture<MemberEditCardDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberEditCardDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberEditCardDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
