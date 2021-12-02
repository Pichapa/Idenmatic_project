import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCardRightComponent } from './add-card-right.component';

describe('AddCardRightComponent', () => {
  let component: AddCardRightComponent;
  let fixture: ComponentFixture<AddCardRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCardRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCardRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
