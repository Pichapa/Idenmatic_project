import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasserTableCardComponent } from './passer-table-card.component';

describe('PasserTableCardComponent', () => {
  let component: PasserTableCardComponent;
  let fixture: ComponentFixture<PasserTableCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasserTableCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasserTableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
