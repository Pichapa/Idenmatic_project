import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAddCardComponent } from './member-add-card.component';

describe('MemberAddCardComponent', () => {
  let component: MemberAddCardComponent;
  let fixture: ComponentFixture<MemberAddCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberAddCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberAddCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
