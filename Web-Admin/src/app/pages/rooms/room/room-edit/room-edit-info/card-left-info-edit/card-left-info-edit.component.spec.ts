import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLeftInfoEditComponent } from './card-left-info-edit.component';

describe('CardLeftInfoEditComponent', () => {
  let component: CardLeftInfoEditComponent;
  let fixture: ComponentFixture<CardLeftInfoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLeftInfoEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLeftInfoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
