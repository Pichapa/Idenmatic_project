import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardShowInformationComponent } from './card-show-information.component';

describe('CardShowInformationComponent', () => {
  let component: CardShowInformationComponent;
  let fixture: ComponentFixture<CardShowInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardShowInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardShowInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
