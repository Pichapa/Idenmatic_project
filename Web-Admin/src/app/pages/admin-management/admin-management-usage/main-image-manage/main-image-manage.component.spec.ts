import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainImageManageComponent } from './main-image-manage.component';

describe('MainImageManageComponent', () => {
  let component: MainImageManageComponent;
  let fixture: ComponentFixture<MainImageManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainImageManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainImageManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
