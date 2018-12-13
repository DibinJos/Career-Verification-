import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPostingRecruiterComponent } from './job-posting-recruiter.component';

describe('JobPostingRecruiterComponent', () => {
  let component: JobPostingRecruiterComponent;
  let fixture: ComponentFixture<JobPostingRecruiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobPostingRecruiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPostingRecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
