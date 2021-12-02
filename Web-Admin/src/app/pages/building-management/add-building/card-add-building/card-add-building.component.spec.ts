import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAddBuildingComponent } from './card-add-building.component';

describe('CardAddBuildingComponent', () => {
  let component: CardAddBuildingComponent;
  let fixture: ComponentFixture<CardAddBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAddBuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAddBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
