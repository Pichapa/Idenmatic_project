import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTypeInfoRightComponent } from './edit-type-info-right.component';

describe('EditTypeInfoRightComponent', () => {
  let component: EditTypeInfoRightComponent;
  let fixture: ComponentFixture<EditTypeInfoRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTypeInfoRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTypeInfoRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
