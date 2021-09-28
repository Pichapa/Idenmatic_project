import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberInfoCardComponent } from './member-info-card.component';

describe('MemberInfoCardComponent', () => {
  let component: MemberInfoCardComponent;
  let fixture: ComponentFixture<MemberInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberInfoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
