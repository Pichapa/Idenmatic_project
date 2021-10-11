import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberEditCarCardComponent } from './member-edit-car-card.component';

describe('MemberEditCarCardComponent', () => {
  let component: MemberEditCarCardComponent;
  let fixture: ComponentFixture<MemberEditCarCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberEditCarCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberEditCarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
