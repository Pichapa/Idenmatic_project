import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAddActivityComponent } from './card-add-activity.component';

describe('CardAddActivityComponent', () => {
  let component: CardAddActivityComponent;
  let fixture: ComponentFixture<CardAddActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAddActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAddActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
