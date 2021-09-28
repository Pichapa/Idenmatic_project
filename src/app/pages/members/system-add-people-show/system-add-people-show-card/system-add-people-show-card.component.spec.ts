import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAddPeopleShowCardComponent } from './system-add-people-show-card.component';

describe('SystemAddPeopleShowCardComponent', () => {
  let component: SystemAddPeopleShowCardComponent;
  let fixture: ComponentFixture<SystemAddPeopleShowCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemAddPeopleShowCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAddPeopleShowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
