import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCardRightCurrentComponent } from './edit-card-right-current.component';

describe('EditCardRightCurrentComponent', () => {
  let component: EditCardRightCurrentComponent;
  let fixture: ComponentFixture<EditCardRightCurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCardRightCurrentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCardRightCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
