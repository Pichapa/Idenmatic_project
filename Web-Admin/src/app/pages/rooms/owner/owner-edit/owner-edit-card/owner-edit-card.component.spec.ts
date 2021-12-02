import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerEditCardComponent } from './owner-edit-card.component';

describe('OwnerEditCardComponent', () => {
  let component: OwnerEditCardComponent;
  let fixture: ComponentFixture<OwnerEditCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerEditCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerEditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
