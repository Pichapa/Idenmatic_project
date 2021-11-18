import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListActivityComponent } from './card-list-activity.component';

describe('CardListActivityComponent', () => {
  let component: CardListActivityComponent;
  let fixture: ComponentFixture<CardListActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardListActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
