import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeInfoComponent } from './add-type-info.component';

describe('AddTypeInfoComponent', () => {
  let component: AddTypeInfoComponent;
  let fixture: ComponentFixture<AddTypeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTypeInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTypeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
