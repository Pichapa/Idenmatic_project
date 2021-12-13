import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRequestMoreComponent } from './card-request-more.component';

describe('CardRequestMoreComponent', () => {
  let component: CardRequestMoreComponent;
  let fixture: ComponentFixture<CardRequestMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRequestMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRequestMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
