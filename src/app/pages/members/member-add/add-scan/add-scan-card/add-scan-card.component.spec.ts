import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScanCardComponent } from './add-scan-card.component';

describe('AddScanCardComponent', () => {
  let component: AddScanCardComponent;
  let fixture: ComponentFixture<AddScanCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddScanCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
