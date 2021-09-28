import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAddPeopleRequestComponent } from './system-add-people-request.component';

describe('SystemAddPeopleRequestComponent', () => {
  let component: SystemAddPeopleRequestComponent;
  let fixture: ComponentFixture<SystemAddPeopleRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemAddPeopleRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAddPeopleRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
