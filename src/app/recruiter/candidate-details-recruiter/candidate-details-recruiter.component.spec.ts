import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateDetailsRecruiterComponent } from './candidate-details-recruiter.component';

describe('CandidateDetailsRecruiterComponent', () => {
  let component: CandidateDetailsRecruiterComponent;
  let fixture: ComponentFixture<CandidateDetailsRecruiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateDetailsRecruiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateDetailsRecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
