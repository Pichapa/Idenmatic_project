import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCardRightComponent } from './request-card-right.component';

describe('RequestCardRightComponent', () => {
  let component: RequestCardRightComponent;
  let fixture: ComponentFixture<RequestCardRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestCardRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestCardRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
