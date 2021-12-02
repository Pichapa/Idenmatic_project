import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCardLeftComponent } from './add-card-left.component';

describe('AddCardLeftComponent', () => {
  let component: AddCardLeftComponent;
  let fixture: ComponentFixture<AddCardLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCardLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCardLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
