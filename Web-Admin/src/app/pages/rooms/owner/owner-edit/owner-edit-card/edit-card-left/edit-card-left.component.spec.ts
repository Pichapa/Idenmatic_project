import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCardLeftComponent } from './edit-card-left.component';

describe('EditCardLeftComponent', () => {
  let component: EditCardLeftComponent;
  let fixture: ComponentFixture<EditCardLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCardLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCardLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
