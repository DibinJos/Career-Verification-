import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobVerificationListComponent } from './job-verification-list.component';

describe('JobVerificationListComponent', () => {
  let component: JobVerificationListComponent;
  let fixture: ComponentFixture<JobVerificationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobVerificationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobVerificationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
