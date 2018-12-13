import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobRequestRecruiterComponent } from './job-request-recruiter.component';

describe('JobRequestRecruiterComponent', () => {
  let component: JobRequestRecruiterComponent;
  let fixture: ComponentFixture<JobRequestRecruiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobRequestRecruiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobRequestRecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
