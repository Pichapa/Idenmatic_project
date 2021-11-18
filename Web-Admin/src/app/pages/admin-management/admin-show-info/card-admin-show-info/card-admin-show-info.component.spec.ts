import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAdminShowInfoComponent } from './card-admin-show-info.component';

describe('CardAdminShowInfoComponent', () => {
  let component: CardAdminShowInfoComponent;
  let fixture: ComponentFixture<CardAdminShowInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAdminShowInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAdminShowInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
