import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchConfirmDialogComponent } from './launch-confirm-dialog.component';

describe('LaunchConfirmDialogComponent', () => {
  let component: LaunchConfirmDialogComponent;
  let fixture: ComponentFixture<LaunchConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchConfirmDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
