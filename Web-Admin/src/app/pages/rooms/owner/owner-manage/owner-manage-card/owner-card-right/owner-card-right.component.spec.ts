import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerCardRightComponent } from './owner-card-right.component';

describe('OwnerCardRightComponent', () => {
  let component: OwnerCardRightComponent;
  let fixture: ComponentFixture<OwnerCardRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerCardRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerCardRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
