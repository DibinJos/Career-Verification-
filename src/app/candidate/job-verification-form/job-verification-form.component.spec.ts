import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobVerificationFormComponent } from './job-verification-form.component';

describe('JobVerificationFormComponent', () => {
  let component: JobVerificationFormComponent;
  let fixture: ComponentFixture<JobVerificationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobVerificationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobVerificationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
