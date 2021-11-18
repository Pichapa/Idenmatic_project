import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShowInfoComponent } from './admin-show-info.component';

describe('AdminShowInfoComponent', () => {
  let component: AdminShowInfoComponent;
  let fixture: ComponentFixture<AdminShowInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminShowInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminShowInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
