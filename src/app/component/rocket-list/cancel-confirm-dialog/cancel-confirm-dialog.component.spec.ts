import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelConfirmDialogComponent } from './cancel-confirm-dialog.component';

describe('CancelConfirmDialogComponent', () => {
  let component: CancelConfirmDialogComponent;
  let fixture: ComponentFixture<CancelConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelConfirmDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
