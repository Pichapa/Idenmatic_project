import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAdminAddComponent } from './card-admin-add.component';

describe('CardAdminAddComponent', () => {
  let component: CardAdminAddComponent;
  let fixture: ComponentFixture<CardAdminAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAdminAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAdminAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
