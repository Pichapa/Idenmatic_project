import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListBuildingComponent } from './card-list-building.component';

describe('CardListBuildingComponent', () => {
  let component: CardListBuildingComponent;
  let fixture: ComponentFixture<CardListBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardListBuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
