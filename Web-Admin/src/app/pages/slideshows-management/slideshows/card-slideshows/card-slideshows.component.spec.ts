import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSlideshowsComponent } from './card-slideshows.component';

describe('CardSlideshowsComponent', () => {
  let component: CardSlideshowsComponent;
  let fixture: ComponentFixture<CardSlideshowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSlideshowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSlideshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
