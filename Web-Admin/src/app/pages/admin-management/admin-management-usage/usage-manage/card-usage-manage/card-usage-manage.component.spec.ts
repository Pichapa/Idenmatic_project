import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUsageManageComponent } from './card-usage-manage.component';

describe('CardUsageManageComponent', () => {
  let component: CardUsageManageComponent;
  let fixture: ComponentFixture<CardUsageManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardUsageManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardUsageManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
