import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerManageCardComponent } from './owner-manage-card.component';

describe('OwnerManageCardComponent', () => {
  let component: OwnerManageCardComponent;
  let fixture: ComponentFixture<OwnerManageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerManageCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerManageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
