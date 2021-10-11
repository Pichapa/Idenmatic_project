import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCardRightCurrentComponent } from './add-card-right-current.component';

describe('AddCardRightCurrentComponent', () => {
  let component: AddCardRightCurrentComponent;
  let fixture: ComponentFixture<AddCardRightCurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCardRightCurrentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCardRightCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
