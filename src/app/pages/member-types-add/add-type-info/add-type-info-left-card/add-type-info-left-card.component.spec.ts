import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeInfoLeftCardComponent } from './add-type-info-left-card.component';

describe('AddTypeInfoLeftCardComponent', () => {
  let component: AddTypeInfoLeftCardComponent;
  let fixture: ComponentFixture<AddTypeInfoLeftCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTypeInfoLeftCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTypeInfoLeftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
