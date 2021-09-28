import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAddPeopleShowComponent } from './system-add-people-show.component';

describe('SystemAddPeopleShowComponent', () => {
  let component: SystemAddPeopleShowComponent;
  let fixture: ComponentFixture<SystemAddPeopleShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemAddPeopleShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAddPeopleShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
