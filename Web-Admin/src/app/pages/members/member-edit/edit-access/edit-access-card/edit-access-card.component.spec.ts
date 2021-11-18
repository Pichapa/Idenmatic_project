import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccessCardComponent } from './edit-access-card.component';

describe('EditAccessCardComponent', () => {
  let component: EditAccessCardComponent;
  let fixture: ComponentFixture<EditAccessCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAccessCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAccessCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
