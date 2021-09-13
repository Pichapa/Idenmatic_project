import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonTypeComponent } from './add-person-type.component';

describe('AddPersonTypeComponent', () => {
  let component: AddPersonTypeComponent;
  let fixture: ComponentFixture<AddPersonTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPersonTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPersonTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
