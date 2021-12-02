import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCardRightComponent } from './edit-card-right.component';

describe('EditCardRightComponent', () => {
  let component: EditCardRightComponent;
  let fixture: ComponentFixture<EditCardRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCardRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCardRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
