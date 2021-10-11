import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCardLeftComponent } from './request-card-left.component';

describe('RequestCardLeftComponent', () => {
  let component: RequestCardLeftComponent;
  let fixture: ComponentFixture<RequestCardLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestCardLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestCardLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
