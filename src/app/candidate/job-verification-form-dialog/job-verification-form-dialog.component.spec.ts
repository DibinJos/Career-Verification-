import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobVerificationFormDialogComponent } from './job-verification-form-dialog.component';

describe('JobVerificationFormDialogComponent', () => {
  let component: JobVerificationFormDialogComponent;
  let fixture: ComponentFixture<JobVerificationFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobVerificationFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobVerificationFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
