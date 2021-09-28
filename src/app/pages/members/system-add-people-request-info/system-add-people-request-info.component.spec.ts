import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAddPeopleRequestInfoComponent } from './system-add-people-request-info.component';

describe('SystemAddPeopleRequestInfoComponent', () => {
  let component: SystemAddPeopleRequestInfoComponent;
  let fixture: ComponentFixture<SystemAddPeopleRequestInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemAddPeopleRequestInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAddPeopleRequestInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
