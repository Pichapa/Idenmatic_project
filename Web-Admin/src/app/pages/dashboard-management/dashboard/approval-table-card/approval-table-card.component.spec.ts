import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalTableCardComponent } from './approval-table-card.component';

describe('ApprovalTableCardComponent', () => {
  let component: ApprovalTableCardComponent;
  let fixture: ComponentFixture<ApprovalTableCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalTableCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalTableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
