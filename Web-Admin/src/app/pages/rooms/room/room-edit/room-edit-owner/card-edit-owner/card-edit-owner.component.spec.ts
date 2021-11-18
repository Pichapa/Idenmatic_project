import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEditOwnerComponent } from './card-edit-owner.component';

describe('CardEditOwnerComponent', () => {
  let component: CardEditOwnerComponent;
  let fixture: ComponentFixture<CardEditOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEditOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEditOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
