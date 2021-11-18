import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAdminEditComponent } from './card-admin-edit.component';

describe('CardAdminEditComponent', () => {
  let component: CardAdminEditComponent;
  let fixture: ComponentFixture<CardAdminEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAdminEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAdminEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
