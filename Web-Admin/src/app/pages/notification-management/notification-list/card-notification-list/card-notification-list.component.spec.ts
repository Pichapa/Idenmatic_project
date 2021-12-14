import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNotificationListComponent } from './card-notification-list.component';

describe('CardNotificationListComponent', () => {
  let component: CardNotificationListComponent;
  let fixture: ComponentFixture<CardNotificationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardNotificationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNotificationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
