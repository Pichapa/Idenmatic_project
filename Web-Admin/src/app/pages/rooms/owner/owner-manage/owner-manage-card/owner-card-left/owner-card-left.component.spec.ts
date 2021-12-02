import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerCardLeftComponent } from './owner-card-left.component';

describe('OwnerCardLeftComponent', () => {
  let component: OwnerCardLeftComponent;
  let fixture: ComponentFixture<OwnerCardLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerCardLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerCardLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
