import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAdminListComponent } from './card-admin-list.component';

describe('CardAdminListComponent', () => {
  let component: CardAdminListComponent;
  let fixture: ComponentFixture<CardAdminListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAdminListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
