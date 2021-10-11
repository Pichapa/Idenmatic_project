import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTypeInfoLeftComponent } from './edit-type-info-left.component';

describe('EditTypeInfoLeftComponent', () => {
  let component: EditTypeInfoLeftComponent;
  let fixture: ComponentFixture<EditTypeInfoLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTypeInfoLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTypeInfoLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
