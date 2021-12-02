import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerManageSelectorComponent } from './owner-manage-selector.component';

describe('OwnerManageSelectorComponent', () => {
  let component: OwnerManageSelectorComponent;
  let fixture: ComponentFixture<OwnerManageSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerManageSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerManageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
