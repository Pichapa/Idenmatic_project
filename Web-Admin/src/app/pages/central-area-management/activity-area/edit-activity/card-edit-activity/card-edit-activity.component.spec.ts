import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEditActivityComponent } from './card-edit-activity.component';

describe('CardEditActivityComponent', () => {
  let component: CardEditActivityComponent;
  let fixture: ComponentFixture<CardEditActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEditActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEditActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
