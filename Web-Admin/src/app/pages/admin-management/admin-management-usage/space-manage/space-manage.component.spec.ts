import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceManageComponent } from './space-manage.component';

describe('SpaceManageComponent', () => {
  let component: SpaceManageComponent;
  let fixture: ComponentFixture<SpaceManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
