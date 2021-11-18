import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEditAccessComponent } from './card-edit-access.component';

describe('CardEditAccessComponent', () => {
  let component: CardEditAccessComponent;
  let fixture: ComponentFixture<CardEditAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEditAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEditAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
