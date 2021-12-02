import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerAddCardComponent } from './owner-add-card.component';

describe('OwnerAddCardComponent', () => {
  let component: OwnerAddCardComponent;
  let fixture: ComponentFixture<OwnerAddCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerAddCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerAddCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
