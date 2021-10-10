import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCardRightPreviousComponent } from './add-card-right-previous.component';

describe('AddCardRightPreviousComponent', () => {
  let component: AddCardRightPreviousComponent;
  let fixture: ComponentFixture<AddCardRightPreviousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCardRightPreviousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCardRightPreviousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
