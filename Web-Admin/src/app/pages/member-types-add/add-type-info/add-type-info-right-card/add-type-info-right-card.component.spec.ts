import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeInfoRightCardComponent } from './add-type-info-right-card.component';

describe('AddTypeInfoRightCardComponent', () => {
  let component: AddTypeInfoRightCardComponent;
  let fixture: ComponentFixture<AddTypeInfoRightCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTypeInfoRightCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTypeInfoRightCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
