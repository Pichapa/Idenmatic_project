import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRightInfoEditComponent } from './card-right-info-edit.component';

describe('CardRightInfoEditComponent', () => {
  let component: CardRightInfoEditComponent;
  let fixture: ComponentFixture<CardRightInfoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRightInfoEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRightInfoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
