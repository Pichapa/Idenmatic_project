import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAddPeopleCardComponent } from './system-add-people-card.component';

describe('SystemAddPeopleCardComponent', () => {
  let component: SystemAddPeopleCardComponent;
  let fixture: ComponentFixture<SystemAddPeopleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemAddPeopleCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAddPeopleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
