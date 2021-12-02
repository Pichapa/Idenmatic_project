import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEditBuildingComponent } from './card-edit-building.component';

describe('CardEditBuildingComponent', () => {
  let component: CardEditBuildingComponent;
  let fixture: ComponentFixture<CardEditBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEditBuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEditBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
