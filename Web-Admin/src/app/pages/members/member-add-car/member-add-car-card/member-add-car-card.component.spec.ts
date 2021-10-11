import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAddCarCardComponent } from './member-add-car-card.component';

describe('MemberAddCarCardComponent', () => {
  let component: MemberAddCarCardComponent;
  let fixture: ComponentFixture<MemberAddCarCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberAddCarCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberAddCarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
