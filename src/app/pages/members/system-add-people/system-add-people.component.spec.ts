import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAddPeopleComponent } from './system-add-people.component';

describe('SystemAddPeopleComponent', () => {
  let component: SystemAddPeopleComponent;
  let fixture: ComponentFixture<SystemAddPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemAddPeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAddPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
