import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageManageComponent } from './usage-manage.component';

describe('UsageManageComponent', () => {
  let component: UsageManageComponent;
  let fixture: ComponentFixture<UsageManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsageManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsageManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
