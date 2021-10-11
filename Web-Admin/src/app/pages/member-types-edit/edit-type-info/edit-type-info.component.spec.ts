import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTypeInfoComponent } from './edit-type-info.component';

describe('EditTypeInfoComponent', () => {
  let component: EditTypeInfoComponent;
  let fixture: ComponentFixture<EditTypeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTypeInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTypeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
