import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCardRightPreviousComponent } from './edit-card-right-previous.component';

describe('EditCardRightPreviousComponent', () => {
  let component: EditCardRightPreviousComponent;
  let fixture: ComponentFixture<EditCardRightPreviousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCardRightPreviousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCardRightPreviousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
